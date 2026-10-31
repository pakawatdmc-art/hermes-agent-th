"""Thai first-run prompts preserve choices, denials and profile isolation."""

from types import SimpleNamespace

import pytest

from agent import i18n
from hermes_cli import cli_output, setup
from hermes_cli.prompt_answers import parse_yes_no
from hermes_constants import reset_hermes_home_override, set_hermes_home_override


@pytest.fixture
def thai_home(tmp_path, monkeypatch):
    monkeypatch.setenv("HERMES_HOME", str(tmp_path))
    monkeypatch.delenv("HERMES_LANGUAGE", raising=False)
    monkeypatch.delenv("HERMES_NONINTERACTIVE", raising=False)
    (tmp_path / "config.yaml").write_text("display:\n  language: th\n", encoding="utf-8")
    i18n.reset_language_cache()
    yield tmp_path
    i18n.reset_language_cache()


@pytest.mark.parametrize("answer", ["ใช่", "ตกลง", "ยืนยัน", "YES", " y "])
def test_thai_affirmatives_are_accepted_by_both_prompt_paths(thai_home, monkeypatch, answer):
    answers = iter([answer, answer])
    monkeypatch.setattr("builtins.input", lambda _question: next(answers))
    assert setup.prompt_yes_no("ดำเนินการต่อหรือไม่?", default=False) is True
    assert cli_output.prompt_yes_no("ดำเนินการต่อหรือไม่?", default=False) is True


@pytest.mark.parametrize("answer", ["ไม่", "ไม่ใช่", "ไม่อนุญาต", "ปฏิเสธ", "ยกเลิก", "NO", "yes-no"])
def test_denials_and_unknown_words_never_become_permission(thai_home, monkeypatch, answer):
    assert parse_yes_no(answer) is not True
    monkeypatch.setattr(cli_output, "prompt", lambda _question: answer)
    assert cli_output.prompt_yes_no("ดำเนินการต่อหรือไม่?", default=True) is False


def test_setup_reprompts_unknown_answer_and_localizes_menu(thai_home, monkeypatch, capsys):
    answers = iter(["yes-no", "ไม่"])
    monkeypatch.setattr("builtins.input", lambda _question: next(answers))
    assert setup.prompt_yes_no("เปิดเครื่องมือหรือไม่?") is False
    assert "กรุณาพิมพ์ ใช่ หรือ ไม่" in capsys.readouterr().out

    seen = []
    monkeypatch.setattr(setup, "_curses_prompt_choice", lambda question, choices, *_args, **_kw: seen.append(choices) or 1)
    with setup._setup_navigation_scope():
        assert setup.prompt_yes_no("เปิดเครื่องมือหรือไม่?") is False
    assert seen == [["ใช่", "ไม่"]]


def test_first_install_menu_reads_language_at_invocation(thai_home, monkeypatch):
    import hermes_cli.auth

    monkeypatch.setattr(setup, "is_interactive_stdin", lambda: True)
    monkeypatch.setattr(setup, "get_env_value", lambda _name: "")
    monkeypatch.setattr(hermes_cli.auth, "get_active_provider", lambda: None)
    monkeypatch.setattr(setup, "offer_agent_import", lambda _home: "")
    menus = []

    def cancel(question, choices, _default):
        menus.append((question, choices))
        raise setup._SetupCancelled()

    monkeypatch.setattr(setup, "prompt_choice", cancel)
    args = SimpleNamespace(reset=False, reconfigure=False, quick=False, non_interactive=False, portal=False, section=None)
    setup.run_setup_wizard(args)
    assert menus[-1][0] == "ต้องการตั้งค่า Hermes แบบใด?"
    assert "ตั้งค่าแบบรวดเร็ว" in menus[-1][1][0]

    english = thai_home / "english"
    english.mkdir()
    (english / "config.yaml").write_text("display:\n  language: en\n", encoding="utf-8")
    token = set_hermes_home_override(english)
    try:
        setup.run_setup_wizard(args)
        assert menus[-1][0] == "How would you like to set up Hermes?"
        assert "Quick Setup" in menus[-1][1][0]
    finally:
        reset_hermes_home_override(token)
    assert i18n.get_language() == "th"


def test_provider_descriptions_translate_without_changing_dispatch_ids(thai_home, monkeypatch):
    from hermes_cli import main, main_provider_setup, model_setup_flows_local, model_switch_providers

    monkeypatch.setattr(model_setup_flows_local, "local_models_available", lambda: False)
    monkeypatch.setattr(model_switch_providers, "_free_tier_nous_row", lambda row: row)
    rows, _default = main_provider_setup._build_provider_picker_rows({}, "openai-codex", {}, {})
    group = next(row for row in rows if row[0] == "group:openai")
    assert "สมาชิก ChatGPT/Codex" in group[1]
    assert "openai-codex" in group[2]
    assert any(key == "custom" and label == "ปลายทางที่กำหนดเอง (กรอก URL)" for key, label, _members in rows)

    def select(choices, **_kwargs):
        return next(index for index, label in enumerate(choices) if label == group[1]) if group[1] in choices else 0

    monkeypatch.setattr(main, "_prompt_provider_choice", select)
    assert main._pick_provider({}, "openai-codex", {}, {}) == group[2][0]
    assert main_provider_setup._translated_picker_description("cli.setup.provider_desc.community", "Community API") == "Community API"


def test_setup_help_keeps_commands_and_translates_explanations(thai_home):
    import argparse
    from hermes_cli.subcommands.setup import build_setup_parser

    parser = argparse.ArgumentParser()
    build_setup_parser(parser.add_subparsers(), cmd_setup=lambda _args: None)
    setup_parser = parser._subparsers._group_actions[0].choices["setup"]
    help_text = setup_parser.format_help()
    assert "ตัวช่วยแบบโต้ตอบ" in help_text
    assert "hermes setup model|tts|terminal|gateway|tools|telemetry|agent" in setup_parser.description
    assert "--non-interactive" in help_text


@pytest.mark.parametrize("language, affirmative, denial", [("de", "ja", "nein"), ("fr", "oui", "non"), ("tr", "evet", "hayır")])
def test_exact_answers_preserve_existing_languages(thai_home, language, affirmative, denial):
    home = thai_home / language
    home.mkdir()
    (home / "config.yaml").write_text(f"display:\n  language: {language}\n", encoding="utf-8")
    token = set_hermes_home_override(home)
    try:
        assert parse_yes_no(affirmative) is True
        assert parse_yes_no(denial) is False
        assert parse_yes_no(affirmative + "?") is None
    finally:
        reset_hermes_home_override(token)


@pytest.mark.parametrize("numbered", [False, True])
def test_thai_reasoning_selection_saves_canonical_level(thai_home, monkeypatch, capsys, numbered):
    from hermes_cli import main_provider_setup
    from hermes_cli.config import atomic_config_write, read_user_config_raw

    atomic_config_write(thai_home / "config.yaml", {**read_user_config_raw(), "agent": {"reasoning_effort": "low"}})
    monkeypatch.setattr(main_provider_setup, "_main_model_reasoning_efforts", lambda *_args: ["low", "medium", "high"])

    def choose(title, choices, selected):
        assert title == "เลือกระดับการคิดวิเคราะห์:"
        assert "กำลังใช้งาน" in choices[selected]
        assert choices[-1] == "ข้าม (ใช้ค่าเดิม)"
        return None if numbered else next(i for i, label in enumerate(choices) if label.startswith("high"))

    monkeypatch.setattr(main_provider_setup, "_radiolist", choose)
    monkeypatch.setattr("builtins.input", lambda question: "3" if "เลือก [1-" in question else pytest.fail(question))
    main_provider_setup._prompt_main_reasoning_effort("test/model", "test")
    assert read_user_config_raw()["agent"]["reasoning_effort"] == "high"
    assert "กำหนดระดับการคิดวิเคราะห์เป็น high แล้ว" in capsys.readouterr().out


def test_cancel_thai_reasoning_selection_preserves_existing_config(thai_home, monkeypatch):
    from hermes_cli import main_provider_setup
    from hermes_cli.config import atomic_config_write, read_user_config_raw

    path = thai_home / "config.yaml"
    atomic_config_write(path, {**read_user_config_raw(), "agent": {"reasoning_effort": "low"}})
    before = path.read_bytes()
    monkeypatch.setattr(main_provider_setup, "_main_model_reasoning_efforts", lambda *_args: ["low", "medium", "high"])
    monkeypatch.setattr(main_provider_setup, "_radiolist", lambda *_args: -1)
    main_provider_setup._prompt_main_reasoning_effort("test/model", "test")
    assert path.read_bytes() == before
