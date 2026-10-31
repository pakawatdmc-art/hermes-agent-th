"""Read-only locale discovery for native clients of the canonical owner."""
import asyncio
from functools import partial
from pathlib import Path


def handlers(connection):
    return {'i18n.languages': partial(read_i18n, connection, catalog=False),
            'i18n.catalog': partial(read_i18n, connection, catalog=True)}


async def read_i18n(connection, ref, params, *, catalog):
    from gateway.session_config import _authorize
    _authorize(connection, ref, params)

    def read():
        from agent.i18n import language_options, resolve_language_id, surface_catalog
        from agent.i18n_layers import CORE_SURFACE
        from gateway.run import _profile_runtime_scope
        # Overlays and overlay-only language IDs belong to this authority's home, including
        # a secondary profile. Never resolve them against the gateway launch environment.
        with _profile_runtime_scope(Path(connection.authority.profile_id)):
            if not catalog:
                return {'languages': language_options()}
            lang = resolve_language_id(params['lang']) or 'en'
            surface = params.get('surface') or CORE_SURFACE
            return {'lang': lang, 'surface': surface, 'messages': surface_catalog(lang, surface)}

    return await asyncio.to_thread(read)
