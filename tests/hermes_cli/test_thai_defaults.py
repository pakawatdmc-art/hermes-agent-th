"""The Thai installer initializes fresh homes without migrating existing user preferences."""

import pytest

from agent import i18n
from hermes_cli.config import load_config, read_user_config_raw
from hermes_cli.default_soul import DEFAULT_SOUL_MD
from hermes_cli.thai_defaults import initialize_thai_install


def test_fresh_install_uses_thai_in_runtime_and_preserves_later_edits(tmp_path, monkeypatch):
    monkeypatch.setenv("HERMES_HOME", str(tmp_path))
    monkeypatch.delenv("HERMES_LANGUAGE", raising=False)
    i18n.reset_language_cache()
    try:
        assert initialize_thai_install()
        assert i18n.get_language() == "th"
        assert load_config()["tts"]["edge"]["voice"].startswith("th-TH-")
        assert load_config()["stt"]["language"] == "th"
        assert (tmp_path / "SOUL.md").read_text(encoding="utf-8") == DEFAULT_SOUL_MD
        assert read_user_config_raw()["display"]["language"] == "th"
        persona = "ตอบตามสำนวนของฉันเท่านั้น"
        (tmp_path / "SOUL.md").write_text(persona, encoding="utf-8")
        assert not initialize_thai_install()
        assert (tmp_path / "SOUL.md").read_text(encoding="utf-8") == persona
    finally:
        i18n.reset_language_cache()


@pytest.mark.parametrize("config", ["display:\n  language: en\n", "broken: [", "# My settings\n"])
def test_existing_install_is_left_byte_for_byte_unchanged(tmp_path, monkeypatch, config):
    monkeypatch.setenv("HERMES_HOME", str(tmp_path))
    path = tmp_path / "config.yaml"
    path.write_text(config, encoding="utf-8")
    soul = tmp_path / "SOUL.md"
    soul.write_text("My own personality", encoding="utf-8")
    auth = tmp_path / "auth.json"
    auth.write_text('{"test-account": true}', encoding="utf-8")
    assert not initialize_thai_install()
    assert path.read_text(encoding="utf-8") == config
    assert soul.read_text(encoding="utf-8") == "My own personality"
    assert auth.read_text(encoding="utf-8") == '{"test-account": true}'


def test_fresh_profile_is_thai_but_an_english_clone_keeps_its_choice(tmp_path, monkeypatch):
    from hermes_cli.config import atomic_config_write
    from hermes_cli.profiles import create_profile

    monkeypatch.setattr("pathlib.Path.home", lambda: tmp_path)
    home = tmp_path / ".hermes"
    home.mkdir()
    monkeypatch.setenv("HERMES_HOME", str(home))
    atomic_config_write(home / "config.yaml", {"display": {"language": "en"},
                                              "model": {"provider": "test", "default": "test/model"}})
    (home / "SOUL.md").write_text("My English persona", encoding="utf-8")
    fresh = create_profile("thai-fresh", no_skills=True)
    assert read_user_config_raw(fresh / "config.yaml")["display"]["language"] == "th"
    assert read_user_config_raw(fresh / "config.yaml")["model"]["default"] == "test/model"
    assert (fresh / "SOUL.md").read_text(encoding="utf-8") == DEFAULT_SOUL_MD
    clone = create_profile("english-clone", clone_from="default", clone_config=True)
    assert read_user_config_raw(clone / "config.yaml")["display"]["language"] == "en"
    assert (clone / "SOUL.md").read_text(encoding="utf-8") == "My English persona"


def test_upgrading_a_legacy_english_scaffold_does_not_switch_response_language(tmp_path, monkeypatch):
    from hermes_cli.config import ensure_hermes_home
    from hermes_cli.default_soul import _LEGACY_TEMPLATE_SOULS, _UPSTREAM_SOUL_MD

    monkeypatch.setenv("HERMES_HOME", str(tmp_path))
    (tmp_path / "config.yaml").write_text("display:\n  language: en\n", encoding="utf-8")
    (tmp_path / "SOUL.md").write_text(_LEGACY_TEMPLATE_SOULS[0], encoding="utf-8")
    ensure_hermes_home()
    assert (tmp_path / "SOUL.md").read_text(encoding="utf-8") == _UPSTREAM_SOUL_MD
    assert load_config()["display"]["language"] == "en"
