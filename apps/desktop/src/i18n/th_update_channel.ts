import type { UpdateChannelCopy } from './types_update_channel'
export const thUpdateChannel: UpdateChannelCopy = {
  title: 'ช่องทางอัปเดต',
  description: 'รุ่นเสถียรจะติดตั้งเฉพาะรุ่นที่เผยแพร่แล้ว ส่วนแบบทุกคอมมิตจะติดตามการเปลี่ยนแปลงล่าสุดบน branch main',
  stable: 'รุ่นเสถียร',
  main: 'ทุกคอมมิต',
  stableConfirmTitle: 'เปลี่ยนไปใช้รุ่นเสถียรไหม',
  stableConfirmBody:
    'Hermes จะย้ายไปยังรีลีสที่เผยแพร่ล่าสุด ซึ่งอาจเก่ากว่าโค้ดที่คุณเรียกใช้ตอนนี้ ข้อมูลที่เขียนด้วยโค้ดใหม่อาจอ่านไม่ถูกต้อง ดังนั้นควรสำรองข้อมูลไว้ก่อน',
  stableConfirm: 'เปลี่ยนไปใช้รุ่นเสถียร',
  failed: 'เปลี่ยนช่องทางอัปเดตไม่สำเร็จ',
  detailsLabel: 'ช่องทาง',
  branch: (b: string) => `Branch: ${b}`,
  change: 'เปลี่ยน',
  latestRelease: (v: string) => `คุณกำลังใช้เวอร์ชันเสถียรล่าสุด (${v})`,
  rollbackTitle: (v: string) => `กลับสู่เวอร์ชันเสถียร ${v}`,
  rollbackBody: (v: string) => `รุ่นที่ใช้อยู่ใหม่กว่ารุ่นเสถียร ${v} การติดตั้งจะย้อน Hermes กลับไปเป็นรุ่นนั้น`,
  heldBody: (v: string) =>
    `รุ่นที่ใช้อยู่ใหม่กว่ารุ่นเสถียร ${v} บทสนทนาของคุณใช้รันไทม์เกตเวย์ที่รุ่น ${v} เปิดไม่ได้แล้ว Hermes จึงจะใช้รุ่นปัจจุบันต่อจนกว่าจะมีรุ่นเสถียรที่ใหม่กว่า`,
  rollbackAction: (v: string) => `ย้อนกลับไปที่ ${v}`,
  allChanges: 'ดูการเปลี่ยนแปลงทั้งหมด'
}
