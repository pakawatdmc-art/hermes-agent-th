"""Thai words need substring recall inside sentences without spaces, with normal search filters."""

from unittest.mock import patch

import pytest

from hermes_state import SessionDB


@pytest.fixture
def thai_db(tmp_path):
    db = SessionDB(db_path=tmp_path / "state.db")
    for session, source, started in (("cli", "cli", 1000), ("desktop", "desktop", 2000), ("cron", "cron", 3000)):
        with patch("hermes_state_worker_lifecycle.time.time", return_value=started):
            db.create_session(session_id=session, source=source)
    db.set_session_title("cli", "นัดรับยาและน้ำดื่ม")
    db.append_message("cli", role="user", content="นัดรับยาและน้ำดื่ม", timestamp=1010)
    db.append_message("cli", role="assistant", content="เตือนรับยาและน้ำดื่ม", timestamp=1020)
    db.append_message("desktop", role="user", content="จัดเตรียมยาและน้ำดื่ม", timestamp=2010)
    db.append_message("cron", role="user", content="บันทึกรับยาและน้ำดื่ม", timestamp=3010)
    yield db
    db.close()


@pytest.mark.parametrize("query", ["ยา", "ยา*", '"ยา"', "ยา AND น้ำ", "ยา NOT ดม"])
def test_short_thai_words_match_inside_unspaced_messages(thai_db, query):
    rows = thai_db.search_messages(query, source_filter=["cli"], role_filter=["user"])
    assert [row["session_id"] for row in rows] == ["cli"]
    assert "ยา" in rows[0]["snippet"]
    assert "content" not in rows[0]


def test_thai_substring_search_preserves_filters_sort_projection_and_title_search(thai_db):
    rows = thai_db.search_messages("ยา", exclude_sources=["cron"], role_filter=["user"],
                                   after_ts=1500, before_ts=2500, fields=("session_id", "role"))
    assert rows == [{"session_id": "desktop", "role": "user"}]
    page = thai_db.search_messages("ยา", source_filter=["cli"], sort="oldest", limit=1, offset=1)
    assert len(page) == 1 and page[0]["role"] == "assistant"
    titles = thai_db.list_sessions_rich(source="cli", search_query="ยา", order_by_last_active=True)
    assert [row["id"] for row in titles] == ["cli"]


def test_thai_scan_keeps_embedded_hits_when_an_isolated_word_also_matches(thai_db):
    thai_db.append_message("cli", role="user", content="ยา", timestamp=1030)
    thai_db.append_message("cli", role="user", content="เตรียมยาดมสำหรับเดินทาง", timestamp=1040)
    rows = thai_db.search_messages("ยา NOT ดม", source_filter=["cli"], role_filter=["user"], sort="oldest")
    assert len(rows) == 2
    assert "นัดรับยาและน้ำดื่ม" in rows[0]["snippet"] and rows[1]["snippet"] == "ยา"
    assert all("ดม" not in row["snippet"] for row in rows)
