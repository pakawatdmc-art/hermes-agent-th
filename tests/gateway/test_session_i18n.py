"""Native TUI startup must read locale packs from its authenticated profile owner."""
from contextlib import ExitStack
from types import SimpleNamespace

import pytest

from agent import i18n, i18n_layers
from gateway.session_authority import SessionAuthority
from gateway.session_controls import AuthorityConnection
from hermes_constants import get_hermes_home
from hermes_state import SessionDB
from hermes_state_runtime import begin_runtime_epoch


@pytest.fixture
def locale_owners(tmp_path, monkeypatch):
    launch, secondary = tmp_path / 'launch', tmp_path / 'profiles' / 'secondary'
    for home, language in ((launch, 'en'), (secondary, 'th')):
        (home / 'locales').mkdir(parents=True)
        (home / 'config.yaml').write_text(f'display:\n  language: {language}\n', encoding='utf-8')
    (secondary / 'locales' / 'th.tui.yaml').write_text(
        'canonical.images.unsupported: "รูปภาพจากโปรไฟล์รอง"\n', encoding='utf-8')
    monkeypatch.setenv('HERMES_HOME', str(launch))
    monkeypatch.delenv('HERMES_LANGUAGE', raising=False)
    i18n_layers._reset_registry_for_tests()
    i18n.reset_language_cache()
    with ExitStack() as stack:
        owners = []
        for home in (launch, secondary):
            db = stack.enter_context(SessionDB(db_path=home / 'state.db'))
            authority = SessionAuthority(SimpleNamespace(), profile_id=str(home), instance_id='test', db=db,
                                         epoch=begin_runtime_epoch(db, instance_id='test'))
            owners.append(authority)
        yield launch, secondary, owners
    i18n_layers._reset_registry_for_tests()
    i18n.reset_language_cache()


async def rpc(connection, method, **params):
    return await connection.dispatch({'jsonrpc': '2.0', 'id': 1, 'method': method, 'params': params})


@pytest.mark.asyncio
async def test_native_config_language_loads_bundled_tui_pack_and_owned_overlay(locale_owners):
    launch, secondary, owners = locale_owners
    primary = AuthorityConnection(owners[0], object(), {'user_id': 'reader'})
    named = AuthorityConnection(owners[1], object(), {'user_id': 'reader'})
    before = (secondary / 'config.yaml').read_bytes()
    try:
        config = await rpc(named, 'config.get', key='full')
        language = config['result']['config']['display']['language']
        assert language == 'th'
        response = await rpc(named, 'i18n.catalog', lang=language, surface='tui')
        assert 'result' in response, response
        catalog = response['result']
        assert catalog['lang'] == 'th' and catalog['surface'] == 'tui'
        assert catalog['messages']['canonical.images.unsupported'] == 'รูปภาพจากโปรไฟล์รอง'
        assert any('\u0e00' <= char <= '\u0e7f' for char in catalog['messages']['canonical.launch.noTuiPolicy'])
        other = await rpc(primary, 'i18n.catalog', lang='th', surface='tui')
        assert other['result']['messages']['canonical.images.unsupported'] != 'รูปภาพจากโปรไฟล์รอง'
        languages = await rpc(named, 'i18n.languages')
        assert any(row['id'] == 'th' and row['endonym'] == 'ไทย' for row in languages['result']['languages'])
        assert (secondary / 'config.yaml').read_bytes() == before
        assert get_hermes_home() == launch
        assert not owners[0].sessions and not owners[1].sessions
    finally:
        await primary.close()
        await named.close()


@pytest.mark.asyncio
async def test_locale_reads_require_owner_read_capability_and_reject_foreign_profiles(locale_owners):
    launch, secondary, owners = locale_owners
    reader = AuthorityConnection(owners[0], object(), {'user_id': 'reader'})
    denied = AuthorityConnection(owners[0], object(), {'user_id': 'denied', 'capabilities': []})
    try:
        for method, params in (
            ('i18n.languages', {}),
            ('i18n.catalog', {'lang': 'th', 'surface': 'tui'}),
        ):
            forbidden = await rpc(denied, method, **params)
            assert forbidden['error']['message'] == 'permission_denied'
            foreign = await rpc(reader, method, **params, profile=str(secondary))
            assert foreign['error']['message'] == 'profile_mismatch'
            unexpected = await rpc(reader, method, **params, injected='no')
            assert unexpected['error']['message'] == 'invalid_params'
        invalid = await rpc(reader, 'i18n.catalog', lang='th', surface='unknown')
        assert invalid['error']['message'] == 'invalid_params'
        assert get_hermes_home() == launch
    finally:
        await reader.close()
        await denied.close()
