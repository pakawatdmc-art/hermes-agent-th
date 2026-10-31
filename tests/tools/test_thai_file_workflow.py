"""Thai filenames, combined marks, multiline UTF-8 and emoji survive real file-tool I/O."""

import json
from pathlib import Path

from tools.file_tools import read_file_tool, write_file_tool


def test_read_write_and_reopen_thai_files(tmp_path, monkeypatch):
    monkeypatch.setenv("TERMINAL_CWD", str(tmp_path))
    folder = tmp_path / "เอกสาร ภาษาไทย"
    folder.mkdir()
    sample = Path(__file__).resolve().parents[2] / "local-dev" / "ตัวอย่างบันทึกประชุม.txt"
    source = folder / "บันทึกประชุม ต้นฉบับ.txt"
    source.write_bytes(sample.read_bytes())
    read = json.loads(read_file_tool(str(source), task_id="thai-source"))
    assert not read.get("error"), read
    for value in ("งบประมาณที่อนุมัติ: 4,800 บาท", "น้ำ เก้าอี้ ผู้เข้าร่วม 🎉 Thai-English"):
        assert value in read["content"]

    output = folder / "สรุปผล ภาษาไทย.md"
    summary = "# สรุปกิจกรรม\n\nค่าใช้จ่ายประมาณการ 3,900 บาท\nคาดว่าเหลือ 900 บาท\nยังไม่จ่ายเงินจริง 🎉\n"
    written = json.loads(write_file_tool(str(output), summary, task_id="thai-output"))
    assert not written.get("error"), written
    assert output.read_text(encoding="utf-8") == summary
    reopened = json.loads(read_file_tool(str(output), task_id="thai-reopen"))
    assert not reopened.get("error"), reopened
    assert "คาดว่าเหลือ 900 บาท" in reopened["content"]
    assert "ยังไม่จ่ายเงินจริง 🎉" in reopened["content"]
