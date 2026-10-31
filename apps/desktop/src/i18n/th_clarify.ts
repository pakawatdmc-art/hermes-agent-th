import type { ClarifyCopy } from './types_clarify'
export const thClarify: ClarifyCopy = {
  notReady: 'คำถามยังไม่พร้อมให้ตอบ',
  gatewayDisconnected: 'Hermes ออฟไลน์อยู่ในขณะนี้ เชื่อมต่อใหม่แล้วส่งอีกครั้ง',
  sendFailed: 'ส่งคำตอบไม่สำเร็จ',
  loadingQuestion: 'กำลังโหลดคำถาม...',
  other: 'อื่นๆ (พิมพ์คำตอบของคุณ)',
  placeholder: 'พิมพ์คำตอบของคุณ...',
  skip: 'ข้าม',
  skipped: 'ข้ามแล้ว',
  noAnswer: 'ยังไม่มีคำตอบ',
  confirmAndContinueLabel: 'ยืนยันและดำเนินการต่อ',
  singleSelectHint: 'เลือกหนึ่งคำตอบ',
  multiSelectHint: 'เลือกทั้งหมดที่เกี่ยวข้อง',
  oneQuestion: '1 คำถาม',
  questionProgress: (answered, total) => `ตอบแล้ว ${answered} จาก ${total} ข้อ`,
  notDelivered: 'คำถามนี้ส่งมาไม่ถึงแอป จึงตอบที่นี่ไม่ได้ กดหยุดเพื่อจบรอบงาน แล้วตอบในแชต'
}
