"""Thai must resolve from user settings and preserve approval decisions across profiles."""

from __future__ import annotations

import pytest

from agent import i18n
from hermes_constants import reset_hermes_home_override, set_hermes_home_override


@pytest.fixture
def thai_home(tmp_path, monkeypatch):
    monkeypatch.setenv("HERMES_HOME", str(tmp_path))
    monkeypatch.delenv("HERMES_LANGUAGE", raising=False)
    (tmp_path / "config.yaml").write_text("display:\n  language: th-TH\n", encoding="utf-8")
    i18n.reset_language_cache()
    yield tmp_path
    i18n.reset_language_cache()


@pytest.mark.parametrize("name", ["th", "th-TH", "TH_th", " Thai ", "ไทย", "ภาษาไทย"])
def test_thai_language_names_resolve_to_the_bundled_catalog(thai_home, name):
    assert i18n.resolve_language_id(name) == "th"
    option = next(row for row in i18n.language_options() if row["id"] == "th")
    assert option["endonym"] == "ไทย"
    assert option["rtl"] is False


def test_thai_profile_renders_approval_without_changing_an_english_profile(thai_home):
    assert i18n.get_language() == "th"
    description = "ลบไฟล์ draft.txt"
    message = i18n.t("approval.dangerous_header", description=description)
    assert "คำสั่งที่มีความเสี่ยง" in message
    assert description in message
    assert "{description}" not in message

    english_home = thai_home / "english"
    english_home.mkdir()
    (english_home / "config.yaml").write_text("display:\n  language: en\n", encoding="utf-8")
    token = set_hermes_home_override(english_home)
    try:
        assert i18n.get_language() == "en"
        assert "DANGEROUS COMMAND" in i18n.t("approval.dangerous_header", description=description)
    finally:
        reset_hermes_home_override(token)
    assert i18n.get_language() == "th"


def test_thai_approval_words_keep_english_and_do_not_approve_denials(thai_home):
    from gateway.run_busy import GatewayBusySessionMixin, approval_input_words
    from gateway.run_inbound import GatewayInboundMixin

    allowed = set(approval_input_words("approve"))
    denied = set(approval_input_words("deny"))
    assert {"อนุญาต", "ยืนยัน", "approve", "yes"} <= allowed
    assert {"ไม่อนุญาต", "ปฏิเสธ", "ยกเลิก", "deny", "no"} <= denied
    assert allowed.isdisjoint(denied)

    commands = GatewayBusySessionMixin()._plaintext_approval_words()
    assert commands["อนุญาต"] == ("approve", "")
    assert commands["อนุญาตตลอดบทสนทนานี้"] == ("approve", "session")
    assert commands["อนุญาตทุกครั้ง"] == ("approve", "always")
    assert commands["ไม่อนุญาต"] == commands["ปฏิเสธ"] == ("deny", "")

    confirmations = GatewayInboundMixin()._slash_confirm_text_choices()
    assert confirmations["อนุญาตครั้งนี้"] == "once"
    assert confirmations["อนุญาตทุกครั้ง"] == "always"
    assert confirmations["ไม่อนุญาต"] == confirmations["ยกเลิก"] == "cancel"
