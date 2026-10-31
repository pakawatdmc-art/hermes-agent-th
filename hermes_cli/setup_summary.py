"""Setup-completion summary (tool availability + "Setup Complete!" banner). setup.py names are
resolved through the module object so test patches on ``hermes_cli.setup.<name>`` take effect."""

import logging

from agent.i18n import t
from tools import tool_backend_helpers
from hermes_cli import nous_subscription

logger = logging.getLogger("hermes_cli.setup")

# provider -> (label, env vars: any one set means available; empty = always).
# Local engines are (label, module, hint) and must be importable.
_TTS_SUMMARY_ROWS = {
    "elevenlabs": ("ElevenLabs", ("ELEVENLABS_API_KEY",)),
    "openai": ("OpenAI", ("VOICE_TOOLS_OPENAI_KEY", "OPENAI_API_KEY")),
    "minimax": ("MiniMax", ("MINIMAX_API_KEY",)), "mistral": ("Mistral Voxtral", ("MISTRAL_API_KEY",)),
    "gemini": ("Google Gemini", ("GEMINI_API_KEY", "GOOGLE_API_KEY")),
    "neutts": ("NeuTTS", "neutts", "run 'hermes setup tts'"),
    "kittentts": ("KittenTTS", "kittentts", "run 'hermes setup tts'")}
_TTS_SUMMARY_DEFAULT = ("Edge TTS", ())
_STT_SUMMARY_ROWS = {
    "openai": ("OpenAI", ("VOICE_TOOLS_OPENAI_KEY", "OPENAI_API_KEY")), "groq": ("Groq Whisper", ("GROQ_API_KEY",)),
    "elevenlabs": ("ElevenLabs Scribe", ("ELEVENLABS_API_KEY",)), "xai": ("xAI", ()),
    "deepinfra": ("DeepInfra", ("DEEPINFRA_API_KEY",))}
_STT_SUMMARY_DEFAULT = ("Local Whisper", "faster_whisper", "run 'hermes tools' → Speech-to-Text")

# Browser "missing" hint keyed by the configured provider; anything else gets the generic hint.
_BROWSER_MISSING_HINTS = {
    "Browserbase": "BROWSERBASE_API_KEY/BROWSERBASE_PROJECT_ID",
    "Browser Use": "BROWSER_USE_API_KEY",
    "Local browser": "Chromium: run 'hermes pm install chromium'"}
_BROWSER_MISSING_DEFAULT = "Chromium (run 'hermes pm install chromium'), or configure Browser Use or Browserbase"
_WEB_MISSING = ("EXA_API_KEY, PARALLEL_API_KEY, FIRECRAWL_API_KEY/FIRECRAWL_API_URL, TAVILY_API_KEY, "
                "PERPLEXITY_API_KEY, KEENABLE_API_KEY, or SEARXNG_URL")

# (command, description) rows; the description carries its own alignment padding.
_EDIT_WIZARD_ROWS = (
    ("hermes setup", "cli.setup.summary.rerun"), ("hermes setup model", "cli.setup.summary.change_model"),
    ("hermes setup terminal", "cli.setup.summary.change_terminal"), ("hermes setup gateway", "cli.setup.summary.messaging"),
    ("hermes setup tools", "cli.setup.summary.tool_providers"))
_EDIT_CONFIG_ROWS = (
    ("hermes config", "cli.setup.summary.view_config"), ("hermes config edit", "cli.setup.summary.edit_config"),
    ("hermes config set <key> <value>", ""))
_READY_ROWS = (
    ("hermes", "cli.setup.summary.chat"), ("hermes gateway", "cli.setup.summary.start_gateway"),
    ("hermes doctor", "cli.setup.summary.doctor"))


def _voice_provider_status(kind: str, provider: str, rows: dict, default: tuple) -> tuple:
    """Summary row for a TTS/STT provider. A keyed provider whose key is missing
    falls through to the default row, matching the runtime fallback."""
    row = rows.get(provider, default)
    if isinstance(row[1], tuple) and row[1] and not any(_setup.get_env_value(v) for v in row[1]):
        row = default
    if isinstance(row[1], tuple):
        return (f"{kind} ({row[0]})", True, None)
    label, module, hint = row
    if _setup._module_installed(module):
        local = t("cli.setup.summary.local_suffix") if kind == t("cli.setup.tts") else ""
        return (f"{kind} ({label}{local})", True, None)
    return (t("cli.setup.summary.not_installed", kind=kind, label=label), False, hint)


def _first_available_plugin_provider(registry: str, skip: str | None = None):
    """display_name of the first plugin-registered provider in ``agent.<registry>`` that reports
    available (fail-soft: any error means none), skipping ``skip``."""
    try:
        import importlib
        from hermes_cli.plugins import _ensure_plugins_discovered
        _ensure_plugins_discovered()
        for provider in importlib.import_module(f"agent.{registry}").list_providers():
            if provider.name == skip:
                continue
            try:
                if provider.is_available():
                    return provider.display_name
            except Exception:
                continue
    except Exception:
        pass
    return None


# ---- tool_status row builders: each takes (config, subscription_features) and returns
# a (name, available, hint) row or None (row omitted). Evaluated in _TOOL_ROW_BUILDERS order.

def _vision_row(config, feats):
    # Use the same runtime resolver as the actual vision tools.
    try:
        from agent.auxiliary_client import get_available_vision_backends
        ok = bool(get_available_vision_backends())
    except Exception:
        ok = False
    return (t("cli.setup.summary.vision"), ok, None if ok else t("cli.setup.summary.run_setup"))


def _managed_or_provider_row(feature, name: str, managed_label: str, missing_hint: str):
    """Row for a Nous-manageable feature: managed > available (with provider) > missing hint."""
    if feature.managed_by_nous:
        return (f"{name} ({managed_label})", True, None)
    if feature.available:
        return (f"{name} ({feature.current_provider})" if feature.current_provider else name, True, None)
    return (name, False, missing_hint)


def _web_row(config, feats):
    # Web tools (Exa, Parallel, Firecrawl, Tavily, or Keenable)
    return _managed_or_provider_row(feats.web, t("cli.setup.summary.web"), t("cli.setup.summary.nous_subscription"), _WEB_MISSING)


def _browser_row(config, feats):
    # Browser tools (local Chromium, Lightpanda, Browserbase, Browser Use, or Firecrawl)
    hint = _BROWSER_MISSING_HINTS.get(feats.browser.current_provider, _BROWSER_MISSING_DEFAULT)
    return _managed_or_provider_row(feats.browser, t("cli.setup.summary.browser"), "Nous Browser Use", hint)


def _image_gen_row(config, feats):
    # FAL (direct or via Nous), or any plugin-registered provider (OpenAI, etc.)
    if feats.image_gen.managed_by_nous:
        return (t("cli.setup.summary.image_nous"), True, None)
    if feats.image_gen.available:
        return (t("cli.setup.summary.image"), True, None)
    # Probe plugin-registered providers so OpenAI-only setups don't show as "missing FAL_KEY".
    backend = _first_available_plugin_provider("image_gen_registry", skip="fal")
    if backend:
        return (t("cli.setup.summary.image_backend", backend=backend), True, None)
    return (t("cli.setup.summary.image"), False, "FAL_KEY or OPENAI_API_KEY")


def _video_gen_row(config, feats):
    # Opt-in via `hermes tools` → Video Generation. Only show the row when a plugin reports
    # available so we don't badger users who don't care about video gen with a "missing" line.
    if feats.video_gen.managed_by_nous:
        return (t("cli.setup.summary.video_nous"), True, None)
    backend = _first_available_plugin_provider("video_gen_registry")
    return (t("cli.setup.summary.video_backend", backend=backend), True, None) if backend else None


def _tts_row(config, feats):
    # Configured provider, gated on its key (or local install)
    if feats.tts.managed_by_nous:
        return (t("cli.setup.summary.tts_nous"), True, None)
    provider = _setup.cfg_get(config, "tts", "provider", default="edge")
    return _voice_provider_status(t('cli.setup.tts'), provider, _TTS_SUMMARY_ROWS, _TTS_SUMMARY_DEFAULT)


def _stt_row(config, feats):
    stt_feature = feats.features.get("stt")
    if stt_feature is not None and stt_feature.managed_by_nous:
        return (t("cli.setup.summary.stt_nous"), True, None)
    provider = _setup.cfg_get(config, "stt", "provider", default="local") or "local"
    return _voice_provider_status(t("cli.setup.stt"), provider, _STT_SUMMARY_ROWS, _STT_SUMMARY_DEFAULT)


def _modal_row(config, feats):
    if feats.modal.managed_by_nous:
        return (t("cli.setup.summary.modal_nous"), True, None)
    if _setup.cfg_get(config, "terminal", "backend") == "modal":
        if feats.modal.direct_override:
            return (t("cli.setup.summary.modal_direct"), True, None)
        return (t("cli.setup.summary.modal"), False, "hermes setup terminal")
    if tool_backend_helpers.managed_nous_tools_enabled() and feats.nous_auth_present:
        return (t("cli.setup.summary.modal_optional"), True, None)
    return None


def _skills_hub_row(config, feats):
    ok = bool(_setup.get_env_value("GITHUB_TOKEN"))
    return (t("cli.setup.summary.skills_hub"), ok, None if ok else "GITHUB_TOKEN")


def _always_on_rows(config, feats):
    # Terminal (system deps met), task planning (in-memory), skills (bundled + user-created).
    return [(t("cli.setup.summary.terminal"), True, None), (t("cli.setup.summary.planning"), True, None),
            (t("cli.setup.summary.skills"), True, None)]


_TOOL_ROW_BUILDERS = (
    _vision_row, _web_row, _browser_row, _image_gen_row, _video_gen_row, _tts_row, _stt_row,
    _modal_row, _skills_hub_row, _always_on_rows)


def _print_cmd_rows(rows):
    """Print (command, description) rows as '   <green cmd><desc>'."""
    for cmd, desc in rows:
        print(f"   {_setup.color(cmd, _setup.Colors.GREEN)}{t(desc) if desc else ''}")


def _print_section_header(title):
    print(_setup.color("─" * 60, _setup.Colors.DIM), end="\n\n")
    print(_setup.color(title, _setup.Colors.CYAN, _setup.Colors.BOLD), end="\n\n")


def _print_setup_summary(config: dict, hermes_home):
    """Print the setup completion summary."""
    from hermes_constants import display_hermes_home as _dhh
    # Provider readiness — the one thing setup must produce. A user who cancelled the API-key
    # prompt mid-wizard used to exit "successfully" with NO working model; say so loudly.
    try:
        from hermes_cli.auth import resolve_provider
        resolve_provider()
    except Exception:
        print()
        _setup.print_warning(t('cli.setup.no_provider'))
        _setup._info(t('cli.setup.finish_provider'),
              t('cli.setup.pick_model_hint'),
              t('cli.setup.portal_hint'))

    print()
    _setup.print_header(t('cli.setup.tool_summary'))

    tool_status = []
    subscription_features = nous_subscription.get_nous_subscription_features(config)
    for build in _TOOL_ROW_BUILDERS:
        row = build(config, subscription_features)
        tool_status.extend(row if isinstance(row, list) else [] if row is None else [row])

    available_count = sum(1 for _, avail, _ in tool_status if avail)
    _setup._info(t("cli.setup.summary.available", count=available_count, total=len(tool_status)), None)
    for name, available, missing_var in tool_status:
        print(f"   {_setup.color('✓', _setup.Colors.GREEN)} {name}" if available else
              f"   {_setup.color('✗', _setup.Colors.RED)} {name} "
              f"{_setup.color(t('cli.setup.summary.missing', item=missing_var), _setup.Colors.DIM)}")
    print()

    if available_count < len(tool_status):
        _setup.print_warning(t('cli.setup.tools_disabled'))
        _setup.print_warning(t("cli.setup.summary.add_keys", path=f"{_dhh()}/.env"))
        print()

    print()
    _setup.print_success(t("cli.setup.done"))
    print()
    print(_setup.color(t("cli.setup.summary.files", path=f"{_dhh()}/"), _setup.Colors.CYAN, _setup.Colors.BOLD), end="\n\n")
    for label, value in ((t('cli.setup.settings_label'), f"  {_setup.get_config_path()}"), (t('cli.setup.api_keys_label'), f"  {_setup.get_env_path()}"),
                         (t('cli.setup.data_label'), f"      {hermes_home}/cron/, sessions/, logs/")):
        print(f"   {_setup.color(label, _setup.Colors.YELLOW)}{value}")
    print()

    _print_section_header(t('cli.setup.edit_title'))
    _print_cmd_rows(_EDIT_WIZARD_ROWS)
    print()
    _print_cmd_rows(_EDIT_CONFIG_ROWS)
    print(t('cli.setup.specific_value'))
    for path in (_setup.get_config_path(), _setup.get_env_path()):
        print(f"   {_setup.color(f'nano {path}', _setup.Colors.DIM)}")
    print()

    _print_section_header(t('cli.setup.ready'))
    _print_cmd_rows(_READY_ROWS)
    print()


import hermes_cli.setup as _setup
