# พัฒนา Hermes ภาษาไทย

เริ่มติดตั้งจาก [README.th.md](README.th.md) ก่อน โครงการนี้เป็น community fork ของ
[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) และคง [MIT License](LICENSE) ของต้นทาง

## Environment สำหรับแต่ละ checkout

สคริปต์ `./dev` เลือก `.hermes-dev/` เป็นพื้นที่ข้อมูลและให้ Hermes PM จัดการ runtime กับ test environment
ใช้จาก Bash หรือ Zsh ได้โดยตรง ทุกคำสั่งด้านล่างรันจากราก repository
พื้นที่นี้มีการตั้งค่า บัญชี ประวัติสนทนา และ logs ของผู้พัฒนาแต่ละคน จึงไม่เข้า Git
cache ดาวน์โหลดของ PM อยู่ภายนอกซอร์สตามการตั้งค่าใน `dev`

| คำสั่ง | การใช้งาน |
| --- | --- |
| `./dev setup` | เตรียมหรือ sync เครื่องมือและ Python environments ที่ PM กำหนด |
| `./dev shell` | เปิด Bash ที่ activate environment แล้ว; ใช้ `exit` เพื่อออก |
| `./dev hermes --version` | ตรวจซอร์สและเวอร์ชันที่กำลังใช้ |
| `./dev hermes model` | ตั้งค่าผู้ให้บริการและโมเดลของคุณเอง |
| `./dev terminal` | เปิด TUI |
| `./dev desktop` | เปิด Desktop จาก build ที่มีอยู่ |
| `./dev npm run build --workspace ui-tui` | build TUI ใหม่ |
| `./dev desktop-build` | build Desktop ใหม่ |
| `./dev doctor` | ตรวจสภาพแวดล้อมและการตั้งค่า |
| `./dev hermes pm doctor` | ตรวจเครื่องมือที่ PM จัดการ |
| `./dev check` | รัน blocking checks ของต้นทาง |
| `./dev test <test-file>` | ใช้ runner ของต้นทางสำหรับ Python tests; ค่าเริ่มต้น 2 workers |

หากแก้ Python หรือ catalog ให้จบงานและปิดทั้งสองหน้าจอ แล้วใช้ `./dev hermes gateway stop`
ก่อนเปิดใหม่ เพื่อให้บริการเบื้องหลังโหลดซอร์สและคำแปลล่าสุด
การแก้คำแนะนำใน `SOUL.md` ให้ทดสอบในบทสนทนาใหม่ เพื่อรักษา prompt caching ของบทสนทนาที่มีอยู่
การติดตั้งใหม่เรียก `hermes_cli.thai_defaults` หลังเตรียม runtime เพื่อสร้างค่าภาษา/เสียงไทย
เมื่อมีไฟล์ตั้งค่าอยู่แล้วจะไม่เขียนทับ ส่วนการโคลนโปรไฟล์รักษาค่าของต้นฉบับ

## ทดสอบการรองรับภาษาไทย

ตัวอย่างชุดทดสอบที่เกี่ยวข้อง:

```bash
./dev npm run build:ink --workspace ui-tui
./dev test tests/agent/test_i18n_thai.py tests/agent/test_i18n_tui_packs.py tests/gateway/test_session_i18n.py tests/tui_gateway/contracts/test_generated.py
./dev test tests/hermes_cli/test_thai_defaults.py tests/hermes_cli/test_setup_thai.py tests/hermes_cli/test_auth_thai.py tests/hermes_state/test_search_thai_substrings.py tests/tools/test_thai_file_workflow.py
./dev npm exec --workspace apps/desktop -- vitest run src/i18n/thai.test.tsx src/i18n/catalog-completeness.test.ts src/i18n/overlay-completeness.test.ts --maxWorkers=2
./dev npm exec --workspace apps/desktop -- vitest run src/i18n/edition-default.test.tsx src/lib/time-context.test.tsx src/lib/time-locale.test.ts src/components/desktop-install-thai.test.tsx src/app/chat/composer/hooks/use-composer-placeholder.test.tsx --maxWorkers=2
./dev npm exec --workspace ui-tui -- vitest run src/__tests__/i18nThai.test.ts src/__tests__/textInputThai.test.tsx --maxWorkers=2
./dev npm run typecheck --workspace apps/desktop
./dev check
```

Python tests ต้องผ่าน `scripts/run_tests.sh` ซึ่ง `./dev test` เรียกให้อยู่แล้ว
ทดสอบเฉพาะส่วนที่เกี่ยวข้องก่อน โดยเฉพาะบนเครื่องที่มีหน่วยความจำจำกัด
ก่อนส่งการเปลี่ยนแปลงให้ตรวจ build และ workflow จริงที่ได้รับผลกระทบด้วย
การทดสอบหน้าจอที่ใช้ React Compiler ต้องส่งภาษาที่เลือกเป็นพารามิเตอร์ให้ตัวจัดรูปแบบวันที่
เพื่อให้การคำนวณที่ compiler จำไว้เปลี่ยนตามภาษา ทดสอบการสลับไทย/อังกฤษในคอมโพเนนต์จริงด้วย
หลังรับซอร์สต้นทาง ให้รันชุดทดสอบข้างต้นเพื่อตรวจคีย์ใหม่ placeholders การอนุญาต และภาษาแต่ละโปรไฟล์

## เมื่อเปลี่ยน dependencies หรือรับอัปเดต

```bash
./dev setup
./dev npm ci
./dev npm run build --workspace ui-tui
./dev desktop-build
```

ใช้ PM จัดการ Python environments ตามต้นทาง อย่าแก้ environment ที่ PM จัดการด้วย raw `pip` หรือ `uv pip`
เมื่อแก้ `pyproject.toml` ให้ใช้ `./dev hermes pm lock` และเก็บ `uv.lock` ที่สร้างใหม่ตามนโยบายของ PM
ก่อนรวมงาน ให้รับซอร์ส `main` ล่าสุด แก้ข้อขัดแย้ง และทดสอบซ้ำ

หลัง build Desktop สามารถใช้ `./dev python local-dev/install_macos_launcher.py`
เพื่อสร้างตัวเปิด native จาก `local-dev/desktop-launcher.swift` บน Mac ของคุณ
สคริปต์กำหนด `HermesWorkspacePath` จาก checkout ปัจจุบัน คอมไพล์ด้วย `xcrun swiftc`
และลงนามแบบ ad-hoc ด้วย `codesign` จึงยังไม่ใช่ตัวติดตั้งที่ลงนาม Developer ID หรือผ่าน notarization
รันใหม่เมื่อย้ายโฟลเดอร์โปรเจกต์; ดูตัวเลือกที่ `./dev python local-dev/install_macos_launcher.py --help`

## สถานะ dependencies จากต้นทาง

การติดตั้งใหม่ด้วย `npm ci` บนฐานซอร์สที่นำมารวมรายงาน audit 38 รายการ
(moderate 34, high 4) รวม dependencies ทางอ้อม รายการนี้มาจาก lockfile ต้นทาง
ซึ่งงานภาษาไทยไม่ได้เปลี่ยน manifest หรือ lockfile
ควรติดตามการแก้จากต้นทางและทดสอบการอัปเดต dependencies แยกจากการแก้คำแปล

อ่าน `AGENTS.md`, `CONTRIBUTING.md` และ `AGENTS.md` ของส่วนที่จะแก้ก่อนเริ่มงาน
แนวทางดูแลคำแปลอยู่ใน [THAI_LOCALIZATION.md](THAI_LOCALIZATION.md)
