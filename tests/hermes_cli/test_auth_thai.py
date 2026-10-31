"""Thai sign-in guidance preserves OAuth data, recovery details and explicit denials."""

from types import SimpleNamespace

import pytest

from agent import i18n
from hermes_cli import auth_codex, auth_codex_browser, auth_device_flow, auth_error_copy


@pytest.fixture
def auth_language(tmp_path, monkeypatch):
    monkeypatch.setenv("HERMES_HOME", str(tmp_path))
    monkeypatch.delenv("HERMES_LANGUAGE", raising=False)
    (tmp_path / "config.yaml").write_text("display:\n  language: th\n", encoding="utf-8")
    i18n.reset_language_cache()
    yield tmp_path
    i18n.reset_language_cache()


def test_device_instructions_localize_without_changing_url_or_user_code(auth_language, monkeypatch, capsys):
    opened = []
    url, code = "https://example.com/verify?source=hermes", "ABCD-1234"
    monkeypatch.setattr(auth_device_flow.webbrowser, "open", lambda value: opened.append(value) or False)

    auth_device_flow._print_device_code_instructions(url, code, open_browser=True)

    output = capsys.readouterr().out
    assert "ดำเนินการต่อ" in output and "เปิดเบราว์เซอร์อัตโนมัติไม่ได้" in output
    assert url in output and code in output
    assert opened == [url]


def test_codex_device_login_keeps_token_exchange_private_and_unchanged(auth_language, monkeypatch, capsys):
    request, authorization = [], {"authorization_code": "code-private", "code_verifier": "pkce-private"}
    monkeypatch.setattr(auth_codex, "_codex_request_device_code", lambda *args: {
        "user_code": "THAI-2026", "device_auth_id": "device-private", "interval": 5})
    monkeypatch.setattr(auth_codex, "_codex_poll_authorization_code", lambda issuer, **kwargs: (
        request.append((issuer, kwargs)) or authorization))
    monkeypatch.setattr(auth_codex, "_codex_exchange_authorization_code", lambda issuer, client_id, data: {
        "access_token": "access-private", "refresh_token": "refresh-private"} if data is authorization else {})

    result = auth_codex._codex_device_code_login()

    output = capsys.readouterr().out
    assert "เปิดลิงก์นี้ในเบราว์เซอร์" in output and "กรอกรหัสนี้" in output
    assert "https://auth.openai.com/codex/device" in output and "THAI-2026" in output
    assert request == [("https://auth.openai.com", {
        "device_auth_id": "device-private", "user_code": "THAI-2026", "poll_interval": 5})]
    assert result["tokens"] == {"access_token": "access-private", "refresh_token": "refresh-private"}
    assert result["source"] == "device-code"
    for secret in ("device-private", "code-private", "pkce-private", "access-private", "refresh-private"):
        assert secret not in output


def test_device_errors_keep_codes_raw_details_and_retry_command(auth_language):
    retry = "hermes -p work auth add openai-codex --type oauth"
    expired = auth_error_copy.device_flow_error("expired_token", "expired at server", retry_command=retry)
    assert expired.oauth_error_code == "expired_token"
    assert "รหัสเข้าสู่ระบบหมดอายุ" in str(expired)
    assert retry in str(expired) and "expired_token: expired at server" in str(expired)
    assert auth_error_copy.sign_in_failure_lines(expired) == str(expired).splitlines()

    network = ConnectionError("ECONNRESET original detail")
    lines = auth_error_copy.sign_in_failure_lines(network, service_host="login.example.com", retry_command=retry)
    assert "เข้าสู่ระบบไม่ได้" in lines[0]
    assert "login.example.com" in lines[0] and retry in lines[0]
    assert "ECONNRESET original detail" in lines[1]
    provider = auth_error_copy.provider_setup_failure_lines(network, retry_command="hermes model")
    assert "การตั้งค่าผู้ให้บริการของคุณยังเหมือนเดิม" in provider[1]
    assert "ECONNRESET original detail" in provider[-1]


def test_english_choice_remains_available_for_sign_in(auth_language, monkeypatch, capsys):
    monkeypatch.setenv("HERMES_LANGUAGE", "en")
    i18n.reset_language_cache()
    auth_device_flow._print_device_code_instructions("https://example.com/verify", "ABCD", open_browser=False)
    assert "To continue:" in capsys.readouterr().out
    expired = auth_error_copy.device_flow_error("expired_token", "raw detail", retry_command="hermes portal")
    assert "The sign-in code expired" in str(expired) and "expired_token: raw detail" in str(expired)


@pytest.mark.parametrize("answer, expected", [
    ("ใช่", True), ("ไม่", False), ("ไม่ใช่", False), ("ยกเลิก", False), ("yes", True), ("no", False),
])
def test_credential_reuse_accepts_thai_without_approving_denials(auth_language, monkeypatch, answer, expected):
    monkeypatch.setattr("builtins.input", lambda _: answer)
    assert auth_device_flow._prompt_yes_no("reuse?", default="y") is expected


def test_codex_flow_entry_guidance_is_thai_without_launching_a_browser(auth_language, monkeypatch, capsys):
    sentinel = {"source": "device-code"}
    monkeypatch.setattr("hermes_cli.auth._codex_device_code_login", lambda: sentinel)
    assert auth_codex_browser.codex_oauth_login(SimpleNamespace(browser=False)) is sentinel
    assert "กำลังเข้าสู่ระบบ OpenAI Codex" in capsys.readouterr().out


@pytest.mark.parametrize("selection, expected", [(0, "provider/model-a"), (1, "my/model-thai"), (2, None)])
def test_model_picker_renders_thai_and_returns_unchanged_model_id(auth_language, monkeypatch, selection, expected):
    from hermes_cli import auth_model_picker, cli_output, curses_ui

    menus = []
    monkeypatch.setattr(curses_ui, "curses_radiolist", lambda title, choices, **kwargs: (
        menus.append((title, choices)) or selection))
    monkeypatch.setattr(cli_output, "line_input", lambda _: "my/model-thai")
    monkeypatch.setattr(auth_model_picker, "_confirm_selection_guards", lambda *args, **kwargs: True)

    assert auth_model_picker._prompt_model_selection(["provider/model-a"]) == expected
    title, choices = menus[0]
    assert title == "เลือกโมเดลเริ่มต้น:"
    assert choices[-2:] == ["กรอกชื่อโมเดลเอง", "ข้าม (ใช้ค่าเดิม)"]
    assert choices[0] == [("provider/model-a", None)]


def test_oauth_reuse_menu_translates_labels_without_changing_action_codes(auth_language, monkeypatch):
    from hermes_cli import model_setup_flows_common as flow

    menus = []
    monkeypatch.setattr(flow, "_curses_choice", lambda title, rows, default: menus.append(rows) or 2)
    assert flow._prompt_auth_credentials_choice("Nous") == "cancel"
    assert menus[0] == ["ใช้ข้อมูลเข้าสู่ระบบเดิม", "เข้าสู่ระบบใหม่ (OAuth)", "ยกเลิก"]


def test_shared_auth_recovery_preserves_raw_detail_and_named_profile(auth_language, monkeypatch):
    from hermes_cli.auth import AuthError, format_auth_error

    monkeypatch.setattr("hermes_constants.profile_cli_selector", lambda: "-p งานไทย ")
    expired = AuthError("raw_invalid_grant", provider="openai-codex", code="invalid_grant", relogin_required=True)
    rendered = format_auth_error(expired)
    assert "raw_invalid_grant" in rendered and "เพื่อเข้าสู่ระบบใหม่" in rendered
    assert "`hermes -p งานไทย model`" in rendered and "`hermes model`" not in rendered
    unavailable = AuthError("raw_service_unavailable", code="temporarily_unavailable")
    assert format_auth_error(unavailable) == "raw_service_unavailable กรุณารอสักครู่แล้วลองอีกครั้ง"
    missing_plan = AuthError("server detail", provider="other", code="subscription_required")
    assert "ไม่พบแผนบริการแบบชำระเงิน" in format_auth_error(missing_plan)


def test_codex_model_flow_keeps_wire_model_id_and_translates_confirmation(auth_language, monkeypatch):
    from hermes_cli import auth, codex_models, model_setup_flows as flow

    saved = []
    monkeypatch.setattr(flow, "_oauth_gate", lambda *args, **kwargs: True)
    monkeypatch.setattr(auth, "get_codex_auth_status", lambda: {
        "logged_in": True, "api_key": "test-token", "base_url": "https://example.com"})
    monkeypatch.setattr(codex_models, "get_codex_model_ids", lambda **kwargs: ["test/model"])
    monkeypatch.setattr(auth, "_prompt_model_selection", lambda *args, **kwargs: "test/model")
    monkeypatch.setattr(flow, "_activate_provider_model", lambda *args, **kwargs: saved.append((args, kwargs)))
    flow._model_flow_openai_codex({})
    args, kwargs = saved[0]
    assert args[:2] == ("test/model", "openai-codex")
    assert args[3] == "ตั้งโมเดลเริ่มต้นเป็น: test/model (ผ่าน OpenAI Codex)"
    assert kwargs["no_change"] == "ไม่มีการเปลี่ยนแปลง"


def test_nous_model_flow_starts_login_with_thai_guidance(auth_language, monkeypatch, capsys):
    from hermes_cli import auth, model_setup_flows as flow

    logins = []
    monkeypatch.setattr(auth, "get_provider_auth_state", lambda _: None)
    monkeypatch.setattr(flow, "_run_login", lambda fn, args, provider: logins.append(provider.id))
    flow._model_flow_nous({})
    assert logins == ["nous"]
    assert "ยังไม่ได้เข้าสู่ระบบ Nous Portal" in capsys.readouterr().out
