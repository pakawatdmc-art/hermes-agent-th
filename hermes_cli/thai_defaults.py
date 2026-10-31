"""First-install defaults for the Thai community edition, never an upgrade migration."""

from agent.i18n import reset_language_cache
from hermes_constants import get_hermes_home
from hermes_cli.config import atomic_config_write, ensure_hermes_home, is_managed
from hermes_cli.config_backend import get_config_backend


def thai_install_defaults() -> dict:
    """Fresh mappings so creating one profile cannot mutate the next profile's defaults."""
    return {
        "display": {"language": "th"},
        "stt": {"language": "th"},
        "tts": {"edge": {"voice": "th-TH-PremwadeeNeural"}},
    }


def initialize_thai_install() -> bool:
    """Initialize an unconfigured home; an existing config (even invalid) is user-owned."""
    home = get_hermes_home()
    if is_managed() or get_config_backend().exists(home):
        return False
    ensure_hermes_home()
    atomic_config_write(home / "config.yaml", thai_install_defaults())
    reset_language_cache()
    return True


if __name__ == "__main__":
    if initialize_thai_install():
        print("เตรียมค่าเริ่มต้นภาษาไทยแล้ว ขั้นต่อไปเชื่อมบัญชีด้วย ./dev hermes model")
    else:
        print("ใช้การตั้งค่าที่มีอยู่ต่อ โดยเก็บภาษา บุคลิก และบัญชีเดิมไว้")
