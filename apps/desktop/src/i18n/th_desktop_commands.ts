import type { DesktopCommandNotices } from './types_desktop_commands'

export const thDesktopCommands: DesktopCommandNotices = {
  error: message => `ข้อผิดพลาด: ${message}`,
  rollbackUsage: 'วิธีใช้: /rollback [list] | diff <n|hash> | <n|hash> [file] [--all]',
  checkpointsDisabled: 'ไม่ได้เปิดจุดคืนค่าสำหรับบทสนทนานี้ (ตั้ง checkpoints.enabled ใน config.yaml)',
  checkpointsEmpty: 'ยังไม่มีจุดคืนค่าสำหรับไดเรกทอรีทำงานนี้',
  checkpointsHeader: 'จุดคืนค่า (ใหม่ที่สุดก่อน):',
  checkpointsHint:
    'คืนค่าด้วย /rollback <n> [file] (เพิ่ม --all เพื่อเขียนทับการแก้ไขของคุณด้วย) ดูตัวอย่างด้วย /rollback diff <n>',
  noDiff: 'ไม่มีการเปลี่ยนแปลงตั้งแต่จุดคืนค่านั้น',
  rollbackFailed: error => `คืนค่าไม่สำเร็จ: ${error}`,
  unknownError: 'ข้อผิดพลาดที่ไม่ทราบสาเหตุ',
  restored: hash => (hash ? `คืนค่าจากจุดคืนค่า ${hash} แล้ว` : 'คืนค่าจากจุดคืนค่าแล้ว'),
  rewound: count => `ย้อนกลับ ${count} ข้อความจากบทสนทนานี้แล้ว`,
  reopenForRewind: 'เปิดแชตนี้อีกครั้งเพื่อดูบทสนทนาหลังย้อนกลับ',
  agentsEmpty: 'ไม่มีเอเจนต์ย่อยหรือกระบวนการเบื้องหลังที่กำลังทำงานในแชตนี้',
  subagentsHeader: count => `เอเจนต์ย่อย (${count}):`,
  subagentFallback: 'เอเจนต์ย่อย',
  statusRunning: 'กำลังทำงาน',
  toolCalls: count => `เรียกเครื่องมือ ${count} ครั้ง`,
  processesHeader: count => `กระบวนการเบื้องหลัง (${count}):`,
  configHeader: 'การตั้งค่า (แสดงเฉพาะการแสดงผล การอนุญาต การวาง และเสียง):',
  configDefaults: '(ค่าเริ่มต้น)',
  configFooter: 'เปลี่ยนได้ในการตั้งค่า หรือแก้ config.yaml ด้วย `hermes config edit` บนเครื่องโฮสต์เกตเวย์',
  historyHeader: count => `ประวัติบทสนทนา (${count} ข้อความ):`,
  historyEmpty: 'ยังไม่มีข้อความ',
  historyYou: 'คุณ',
  historyHermes: 'Hermes',
  saveUsage: 'วิธีใช้: /save [json|md|html] [filename] [redact]',
  saveLegacyRefused:
    'ยังไม่ได้บันทึก: เกตเวย์นี้ส่งออกสำเนาที่ปกปิดข้อมูล ตั้งชื่อ หรือเป็นรูปแบบอื่นนอกจาก JSON ไม่ได้ อัปเดตเกตเวย์ หรือใช้ /save โดยไม่มีตัวเลือกเพื่อเขียน JSON ดิบลงเครื่องโฮสต์เกตเวย์',
  savedOnHost: path => `บันทึกบนเครื่องโฮสต์เกตเวย์แล้ว: ${path}`,
  unknownPath: '(ไม่ทราบพาธ)',
  saveUnsupported: 'ข้อผิดพลาด: เดสก์ท็อปรุ่นนี้บันทึกไฟล์ไม่ได้',
  saveDialogTitle: 'บันทึกบทสนทนา',
  savedTo: path => `บันทึกบทสนทนาไว้ที่ ${path} แล้ว`,
  saveCancelled: 'ไม่ได้บันทึก (ยกเลิกแล้ว)',
  exportRemote:
    '/export จัดแพ็กเกจโปรไฟล์จากเครื่องโฮสต์เกตเวย์ ซึ่งเป็นคนละเครื่องกับเครื่องนี้ เรียกใช้ `hermes profile export` บนเครื่องนั้น',
  importRemote:
    '/import ติดตั้งโปรไฟล์บนเครื่องโฮสต์เกตเวย์ ซึ่งเป็นคนละเครื่องกับเครื่องนี้ เรียกใช้ `hermes profile import <archive>` บนเครื่องนั้น',
  timestampsUsage: 'วิธีใช้: /timestamps [on|off|status]',
  timestampsOn: 'แสดงเวลา: เปิด (เฉพาะหน้าต่างนี้ ตั้ง display.timestamps ใน config.yaml เพื่อเก็บค่านี้ไว้)',
  timestampsOff: 'แสดงเวลา: ปิด (เฉพาะหน้าต่างนี้ ตั้ง display.timestamps ใน config.yaml เพื่อเก็บค่านี้ไว้)'
}
