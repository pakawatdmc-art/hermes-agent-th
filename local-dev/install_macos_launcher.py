"""Build a checkout-specific macOS launcher without copying user data."""

import argparse
from pathlib import Path
import plistlib
import shutil
import subprocess
import sys
import tempfile
import uuid

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from hermes_platform.host.facts import os_family
from hermes_platform.resolver import locate_command

BUNDLE_ID = "local.hermes.thai.launcher"


def command(name: str) -> str:
    resolved = locate_command(name)
    if not resolved.found:
        raise RuntimeError(f"ไม่พบ {name}; ต้องติดตั้ง Xcode Command Line Tools ก่อน")
    return resolved.command[0]


def check_destination(destination: Path) -> None:
    if destination.is_symlink():
        raise RuntimeError("ตำแหน่งติดตั้งเป็น symlink; กรุณาเลือกตำแหน่งอื่น")
    if not destination.exists():
        return
    info = destination / "Contents" / "Info.plist"
    if not info.is_file() or plistlib.loads(info.read_bytes()).get("CFBundleIdentifier") != BUNDLE_ID:
        raise RuntimeError("ตำแหน่งติดตั้งมีแอปหรือไฟล์อื่นอยู่แล้ว จะไม่เขียนทับ")


def build_bundle(bundle: Path, xcrun: str, codesign: str) -> None:
    contents = bundle / "Contents"
    (contents / "MacOS").mkdir(parents=True)
    (contents / "Resources").mkdir()
    shutil.copy2(ROOT / "apps/desktop/assets/icon.icns", contents / "Resources/Hermes.icns")
    info = {
        "CFBundleName": "Hermes ภาษาไทย",
        "CFBundleDisplayName": "Hermes ภาษาไทย",
        "CFBundleIdentifier": BUNDLE_ID,
        "CFBundleExecutable": "HermesThaiLauncher",
        "CFBundleIconFile": "Hermes.icns",
        "CFBundlePackageType": "APPL",
        "CFBundleShortVersionString": "1.0",
        "CFBundleVersion": "1",
        "LSUIElement": True,
        "NSHighResolutionCapable": True,
        "HermesWorkspacePath": str(ROOT),
    }
    (contents / "Info.plist").write_bytes(plistlib.dumps(info))
    subprocess.run([
        xcrun, "swiftc", str(ROOT / "local-dev/desktop-launcher.swift"),
        "-o", str(contents / "MacOS/HermesThaiLauncher"), "-framework", "AppKit",
    ], check=True, timeout=300)
    subprocess.run([codesign, "--force", "--sign", "-", str(bundle)], check=True, timeout=60)
    subprocess.run([codesign, "--verify", "--strict", str(bundle)], check=True, timeout=60)


def install(destination: Path) -> None:
    check_destination(destination)
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="hermes-thai-launcher-", dir=destination.parent) as temporary:
        bundle = Path(temporary) / destination.name
        build_bundle(bundle, command("xcrun"), command("codesign"))
        if destination.exists():
            backup = destination.with_name(destination.name + ".backup-" + uuid.uuid4().hex[:8])
            destination.rename(backup)
            print(f"สำรองตัวเปิดเดิมไว้ที่: {backup}")
        bundle.rename(destination)
    print(f"ติดตั้งแล้ว: {destination}")
    print("เปิด Finder แล้วเลือกแอปนี้ → เมนูไฟล์ → เพิ่มไปยัง Dock")
    print("ตัวเปิดใช้โฟลเดอร์โปรเจกต์ปัจจุบัน หากย้ายโฟลเดอร์ ให้ติดตั้งตัวเปิดใหม่")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--destination", type=Path,
                        default=Path.home() / "Applications" / "Hermes ภาษาไทย.app",
                        help="ตำแหน่งแอปที่จะติดตั้ง (ค่าเริ่มต้น: Applications ของผู้ใช้)")
    args = parser.parse_args()
    if os_family() != "darwin":
        parser.error("ตัวเปิดนี้ใช้ได้เฉพาะ macOS")
    if not (ROOT / "apps/desktop/dist/index.html").is_file():
        parser.error("กรุณารัน ./dev desktop-build ให้สำเร็จก่อน")
    destination = args.destination.expanduser().absolute()
    if destination.suffix != ".app":
        parser.error("ตำแหน่งติดตั้งต้องลงท้ายด้วย .app")
    try:
        install(destination)
    except subprocess.TimeoutExpired:
        print("ติดตั้งตัวเปิดไม่สำเร็จ: การคอมไพล์หรือลงนามใช้เวลานานเกินกำหนด กรุณาลองอีกครั้ง",
              file=sys.stderr)
        return 1
    except (OSError, ValueError, RuntimeError, subprocess.CalledProcessError) as error:
        print(f"ติดตั้งตัวเปิดไม่สำเร็จ: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
