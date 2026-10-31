"""Plain-language copy for sign-in and provider-setup failures (CLI).

One table of ``(predicate, lead sentence)`` classifies an exception into a sentence a first-time
user can act on; the raw exception is demoted to a ``Details:`` line so nothing is lost for
support. Callers print ``sign_in_failure_lines(...)`` / ``provider_setup_failure_lines(...)``
line by line.
"""

from __future__ import annotations

from typing import Callable, Sequence, Tuple

from agent.i18n import t

# httpx class names and stdlib bases that mean "the request never got a usable answer".
_NETWORK_ERROR_TYPES = frozenset({
    "ConnectError", "ConnectTimeout", "ReadTimeout", "PoolTimeout", "WriteTimeout", "TimeoutException",
    "RemoteProtocolError", "ReadError", "ProxyError", "UnsupportedProtocol", "NetworkError",
})

# OAuth device-flow error codes (RFC 8628 §3.5) -> profile-local catalog keys.
DEVICE_FLOW_ERROR_COPY = {
    code: f"cli.auth.device_error.{code}"
    for code in ("expired_token", "access_denied", "invalid_grant", "invalid_client")
}


class DeviceCodeExpired(TimeoutError):
    """The device code ran out before the user approved it in the browser (not a network timeout)."""

    code = "device_code_timeout"


# ``AuthError.code`` values the device-code pollers raise when the code runs out.
_DEVICE_CODE_EXPIRED_CODES = frozenset({"device_code_timeout", "timeout"})


class SignInCopyError(RuntimeError):
    """Exception whose ``str()`` is already user copy (lead line + ``Details:`` line)."""

    def __init__(self, message: str, *, oauth_error_code: str = "") -> None:
        super().__init__(message)
        self.oauth_error_code = oauth_error_code


def is_network_error(exc: BaseException) -> bool:
    """True for connection/DNS/timeout failures from httpx, requests or the stdlib."""
    if isinstance(exc, (SignInCopyError, DeviceCodeExpired)):
        return False
    names = {cls.__name__ for cls in type(exc).__mro__}
    return bool(names & _NETWORK_ERROR_TYPES) or isinstance(exc, (ConnectionError, TimeoutError))


def is_device_code_expired(exc: BaseException) -> bool:
    """True when a device-code sign-in ended because its code ran out (any provider)."""
    return (getattr(exc, "code", None) in _DEVICE_CODE_EXPIRED_CODES
            or getattr(exc, "oauth_error_code", "") == "expired_token")


def is_cancelled(exc: BaseException) -> bool:
    return isinstance(exc, (KeyboardInterrupt, EOFError)) or (
        isinstance(exc, SystemExit) and exc.code in (130, None, 0))


def device_flow_error(code: str, description: str, *, retry_command: str = "hermes portal") -> SignInCopyError:
    """Exception for an OAuth device-flow error code whose text is already user-facing.

    Unknown codes keep the server's description as the lead (it is the only information available)
    but still name the retry command.
    """
    key = DEVICE_FLOW_ERROR_COPY.get(code)
    lead = t(key, retry=retry_command) if key else t(
        "cli.auth.device_error.unknown", retry=retry_command,
        description=description or t("cli.auth.server_rejected"))
    details = f"{code}: {description}" if code else description
    return SignInCopyError(f"{lead}\n  Details: {details}" if details else lead, oauth_error_code=code)


def _details_line(exc: BaseException) -> str:
    text = str(exc).strip() or type(exc).__name__
    return f"  Details: {text}"


_Rule = tuple[Callable[[BaseException], bool], str]


def _classify(exc: BaseException, rules: Sequence[_Rule], other: str) -> str:
    return next((copy for pred, copy in rules if pred(exc)), other)


def sign_in_failure_lines(
    exc: BaseException, *, service_host: str = "portal.nousresearch.com", retry_command: str = "hermes portal",
) -> list:
    """Lines to print when a device-code / browser sign-in fails for any non-timeout reason."""
    from hermes_cli.observability.shared_metrics_setup import note_sign_in_failure

    note_sign_in_failure(exc)
    if isinstance(exc, SignInCopyError):
        return str(exc).splitlines()
    rules: Sequence[_Rule] = (
        (is_cancelled, "cli.auth.sign_in_cancelled"),
        (is_network_error, "cli.auth.sign_in_network"),
    )
    lead = _classify(
        exc, rules,
        "cli.auth.sign_in_failed")
    lines = [t(lead, host=service_host, retry=retry_command)]
    if not is_cancelled(exc):
        lines.append(_details_line(exc))
    return lines


def provider_setup_failure_lines(exc: BaseException, *, retry_command: str = "hermes model") -> list:
    """Lines to print when the setup wizard's provider step fails: reason, that nothing was saved,
    and how to retry."""
    nothing_saved = t("cli.auth.provider_unchanged", retry=retry_command)
    if isinstance(exc, SignInCopyError):
        lead, *details = str(exc).splitlines()
        return [t("cli.auth.provider_failed_detail", detail=f"{lead[0].lower()}{lead[1:]}"),
                nothing_saved, *details]
    rules: Sequence[_Rule] = (
        (is_cancelled, "cli.auth.reason_cancelled"),
        (is_network_error, "cli.auth.reason_network"),
    )
    reason = t(_classify(exc, rules, "cli.auth.reason_unknown"))
    lines = [t("cli.auth.provider_failed", reason=reason), nothing_saved]
    if not is_cancelled(exc):
        lines.append(_details_line(exc))
    return lines


def unknown_provider_hint(provider_name: str) -> str:
    """Hint for an ``Unknown provider`` error from the resolver: the install line of a provider that left
    core for a plugin, the replacement for a removed provider, else the config issues that cause it."""
    from hermes_cli.left_core_migration import provider_install_hint
    if moved := provider_install_hint(provider_name):
        return moved
    if str(provider_name or "").strip().lower() in {"opencode-free", "free", "opencode_free"}:
        return ("OpenCode discontinued anonymous free-tier access outside its own client "
                "(relay 403s FreeTierError), so the keyless 'opencode-free' provider was removed. "
                "Switch to 'opencode-zen' (pay-as-you-go, OPENCODE_ZEN_API_KEY) or 'opencode-go' "
                "($10/mo subscription, OPENCODE_GO_API_KEY) via 'hermes model'.")
    try:
        from hermes_cli.config import validate_config_structure
        issues = validate_config_structure()
        if not issues:
            return ""
        lines = ["Config issue detected — run 'hermes doctor' for full diagnostics:"]
        for ci in issues:
            lines.append(f"  [{'ERROR' if ci.severity == 'error' else 'WARNING'}] {ci.message}")
            if ci.hint and ci.hint.splitlines()[0]:
                lines.append(f"    → {ci.hint.splitlines()[0]}")
        return "\n".join(lines)
    except Exception:  # health: allow BLE001 -- moved verbatim from auth.py; a hint never masks the error it explains
        return ""
