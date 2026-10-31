"""OpenAI Codex browser login: authorization-code + PKCE on a loopback listener (opt-in).

``hermes auth add openai-codex --browser`` (or ``auth.codex_login_flow: browser``) sends the
system browser to OpenAI's authorize endpoint and receives the code on
``http://localhost:1455/auth/callback`` — the redirect URI fixed by the public Codex client
registration, so the port is not negotiable. Organizations that disable the device-code grant can
still sign in this way (#95743). The device-code flow in ``auth_codex.py`` stays the default and is
the fallback whenever the loopback port is already taken (a Codex CLI login in progress).

Credentials come back in the same dict shape as ``_codex_device_code_login`` with
``source="loopback_pkce"`` so the pool/singleton save paths treat both flows alike. Tokens,
authorization codes and the PKCE verifier are never logged or printed.

Derived from #97058 by @astraltrekkin, re-homed after the ``auth_codex.py`` split.
"""

from __future__ import annotations

from agent.i18n import t

import hmac
import logging
import secrets
import webbrowser
from typing import Any, Dict, Optional
from urllib.parse import urlencode

from hermes_cli.auth_constants import AuthError, CODEX_OAUTH_CLIENT_ID, CODEX_OAUTH_TOKEN_URL, _codex_err
from hermes_cli.auth_device_flow import (
    _bind_loopback_callback_server, _can_open_graphical_browser, _make_loopback_callback_handler,
    _pkce_code_challenge, _pkce_code_verifier, _print_loopback_ssh_hint, _serve_loopback_callback)

logger = logging.getLogger("hermes_cli.auth")

CODEX_OAUTH_AUTHORIZE_URL = "https://auth.openai.com/oauth/authorize"
CODEX_OAUTH_BROWSER_SCOPE = "openid profile email offline_access"
# Registered with the Codex client: ``http://localhost:1455/auth/callback``. The listener binds
# 127.0.0.1 explicitly; only the redirect URI string says ``localhost``.
CODEX_BROWSER_CALLBACK_PORT = 1455
CODEX_BROWSER_CALLBACK_PATH = "/auth/callback"
CODEX_BROWSER_CALLBACK_TIMEOUT_SECONDS = 300.0
CODEX_LOGIN_FLOWS = ("device_code", "browser")
CODEX_BROWSER_PORT_BUSY_CODE = "codex_browser_port_busy"

def _codex_login_flow(args: Any) -> str:
    """``browser`` only when the user asked for it: ``--browser`` or ``auth.codex_login_flow``."""
    if getattr(args, "browser", False):
        return "browser"
    from hermes_cli.config import load_config_readonly
    auth_cfg = (load_config_readonly() or {}).get("auth")
    flow = str((auth_cfg or {}).get("codex_login_flow", "device_code") if isinstance(auth_cfg, dict) else "device_code")
    flow = flow.strip().lower() or "device_code"
    if flow not in CODEX_LOGIN_FLOWS:
        print(t("cli.auth.codex_unknown_flow", flow=repr(flow), choices=", ".join(CODEX_LOGIN_FLOWS)))
        return "device_code"
    return flow


def codex_oauth_login(args: Any) -> dict[str, Any]:
    """Run the Codex OAuth flow selected by *args*/config; port-busy browser attempts fall back."""
    from hermes_cli import auth as auth_mod  # late: ``hermes_cli.auth.<name>`` patches must intercept
    if _codex_login_flow(args) == "browser":
        try:
            return _codex_browser_login(
                open_browser=not getattr(args, "no_browser", False),
                timeout_seconds=getattr(args, "timeout", None))
        except AuthError as exc:
            if exc.code != CODEX_BROWSER_PORT_BUSY_CODE:
                raise
            print(t("cli.auth.codex_port_busy", port=CODEX_BROWSER_CALLBACK_PORT))
            print()
    print(t("cli.auth.codex_sign_in"))
    print(t("cli.auth.codex_separate_session"))
    print()
    return auth_mod._codex_device_code_login()


def _codex_browser_authorize_url(*, redirect_uri: str, state: str, code_challenge: str) -> str:
    return f"{CODEX_OAUTH_AUTHORIZE_URL}?" + urlencode({
        "response_type": "code", "client_id": CODEX_OAUTH_CLIENT_ID, "redirect_uri": redirect_uri,
        "scope": CODEX_OAUTH_BROWSER_SCOPE, "code_challenge": code_challenge,
        "code_challenge_method": "S256", "id_token_add_organizations": "true", "state": state})


def _codex_browser_exchange_code(code: str, *, redirect_uri: str, code_verifier: str) -> dict[str, Any]:
    """Swap the authorization code for tokens at the token endpoint the device flow also uses."""
    from hermes_cli.auth_codex import _codex_login_post, _codex_login_rate_limited_error
    token_resp = _codex_login_post(
        CODEX_OAUTH_TOKEN_URL,
        data={
            "grant_type": "authorization_code", "code": code, "redirect_uri": redirect_uri,
            "client_id": CODEX_OAUTH_CLIENT_ID, "code_verifier": code_verifier},
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        failure=("Token exchange failed", "token_exchange_failed"))
    if token_resp.status_code == 429:
        raise _codex_login_rate_limited_error(token_resp, during=" during token exchange")
    if token_resp.status_code != 200:
        raise _codex_err(
            f"Token exchange returned status {token_resp.status_code}.", "token_exchange_error")
    tokens = token_resp.json()
    if not tokens.get("access_token", ""):
        raise _codex_err(
            "Token exchange did not return an access_token.", "token_exchange_no_access_token")
    return tokens


def _codex_browser_login(
    *, open_browser: bool = True, timeout_seconds: Optional[float] = None) -> dict[str, Any]:
    """Authorization-code + PKCE login on the loopback listener; returns the device-flow creds shape.

    Raises ``AuthError(code=CODEX_BROWSER_PORT_BUSY_CODE)`` when :1455 cannot be bound so the caller
    can fall back to the device-code flow instead of failing the login.
    """
    from hermes_cli.auth import _utc_now_z
    from hermes_cli.auth_codex import _codex_base_url
    code_verifier = _pkce_code_verifier()
    state = secrets.token_urlsafe(32)
    handler_cls, result = _make_loopback_callback_handler(CODEX_BROWSER_CALLBACK_PATH, display_name="OpenAI Codex")
    server = _bind_loopback_callback_server(
        "127.0.0.1", CODEX_BROWSER_CALLBACK_PORT, handler_cls, err=_codex_err,
        bind_failed_code=CODEX_BROWSER_PORT_BUSY_CODE)
    redirect_uri = f"http://localhost:{server.server_address[1]}{CODEX_BROWSER_CALLBACK_PATH}"
    auth_url = _codex_browser_authorize_url(
        redirect_uri=redirect_uri, state=state, code_challenge=_pkce_code_challenge(code_verifier))

    print()
    print(t("cli.auth.codex_browser_sign_in"))
    print(t("cli.auth.codex_separate_session"))
    print()
    print(t("cli.auth.codex_authorize_url", url=auth_url))
    _print_loopback_ssh_hint(redirect_uri)
    if open_browser and _can_open_graphical_browser():
        try:
            opened = webbrowser.open(auth_url)
        except Exception:
            opened = False
        print(t("cli.auth.codex_browser_opened") if opened
              else t("cli.auth.codex_browser_failed"))
    wait = float(timeout_seconds or CODEX_BROWSER_CALLBACK_TIMEOUT_SECONDS)
    print(t("cli.auth.codex_browser_wait", url=redirect_uri, seconds=int(wait)))
    try:
        callback = _serve_loopback_callback(
            server, result, timeout_seconds=wait, err=_codex_err, timeout_code="codex_browser_callback_timeout")
    except KeyboardInterrupt:
        print("\n" + t("cli.auth.login_cancelled"))
        raise SystemExit(130)

    if callback.get("error"):
        detail = callback.get("error_description") or callback["error"]
        raise _codex_err(f"OpenAI authorization failed: {detail}", "codex_browser_auth_denied")
    if not hmac.compare_digest(str(callback.get("state") or ""), state):
        raise _codex_err(
            "Authorization callback state mismatch — the redirect did not come from this login. Aborting.",
            "codex_browser_state_mismatch")
    code = str(callback.get("code") or "").strip()
    if not code:
        raise _codex_err("Authorization callback did not carry a code.", "codex_browser_no_code")

    print(t("cli.auth.codex_exchanging"))
    tokens = _codex_browser_exchange_code(code, redirect_uri=redirect_uri, code_verifier=code_verifier)
    return {
        "tokens": {
            "access_token": tokens.get("access_token", ""),
            "refresh_token": tokens.get("refresh_token", "")},
        "base_url": _codex_base_url(), "last_refresh": _utc_now_z(), "auth_mode": "chatgpt",
        "source": "loopback_pkce"}
