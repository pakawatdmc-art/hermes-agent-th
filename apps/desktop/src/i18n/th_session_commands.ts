import type { SessionCommandNotices } from './types_notices'

export const thSessionCommands: SessionCommandNotices = {
  undoUsage: 'วิธีใช้: /undo [N]',
  undoNothing: 'ไม่มีข้อความให้ย้อนกลับ',
  undidOne: (count: string) => `ย้อนกลับ ${count} ข้อความแล้ว — ข้อความที่นำออกอยู่ในช่องเขียนข้อความ`,
  undidOther: (count: string) => `ย้อนกลับ ${count} ข้อความแล้ว — ข้อความที่นำออกอยู่ในช่องเขียนข้อความ`,
  retryNothing: 'ไม่มีข้อความให้ลองอีกครั้ง',
  retryUnsupported: '/retry: การลองอีกครั้งไม่รองรับสื่อหรือส่วนเนื้อหาที่ไม่รู้จัก',
  busy: (command: string) =>
    `บทสนทนายังไม่ว่าง — Hermes กำลังตอบอยู่ หยุดคำตอบปัจจุบันก่อน (ปุ่มหยุด หรือ Ctrl+C ในเทอร์มินัล) แล้วใช้ /${command}`,
  busyCompressing: (command: string) => `บทสนทนายังไม่ว่าง — /compress กำลังทำงาน ใช้ /${command} เมื่อเสร็จแล้ว`,
  steerUsage: 'วิธีใช้: /steer <prompt>',
  steerQueued: (preview: string) => `คำแนะนำเพิ่มเข้าคิวแล้ว — จะถึงหลังเรียกเครื่องมือครั้งถัดไป: "${preview}"`,
  steerNoActiveTurn: (preview: string) => `ไม่มีรอบที่กำลังทำงาน — เข้าคิวสำหรับรอบถัดไปแล้ว: "${preview}"`,
  steerRejected: 'ไม่รับคำแนะนำเพิ่ม — ไม่มีรอบที่กำลังทำงาน กำลังเข้าคิวสำหรับรอบถัดไป',
  queued: (preview: string) => `เข้าคิวแล้ว: "${preview}"`,
  queueFailed: 'นำข้อความเข้าคิวไม่สำเร็จ',
  countOne: (count: string) => `มีข้อความในคิว ${count} รายการ`,
  countOther: (count: string) => `มีข้อความในคิว ${count} รายการ`,
  queueEditKeptTitle: 'ข้อความในคิวไม่เปลี่ยนแปลง',
  queueEditKept: 'ข้อความเริ่มทำงานหรือถูกปฏิเสธก่อนบันทึกการแก้ไข ข้อความที่คุณแก้ไขยังอยู่ในช่องเขียนข้อความ',
  queueEditUnconfirmedTitle: 'ยังยืนยันการแก้ไขไม่ได้',
  queueEditUnconfirmed:
    'Hermes ยืนยันการแก้ไขของคุณไม่ได้ กดบันทึกอีกครั้งเพื่อลองการแก้ไขเดิม ระบบจะไม่นำข้อความเข้าคิวซ้ำ'
}
