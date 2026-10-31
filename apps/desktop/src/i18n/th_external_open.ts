import type { ExternalOpenFailedCopy } from './types_external_open'
export const thExternalOpenFailed: ExternalOpenFailedCopy = {
  title: 'ไม่สามารถเปิดลิงก์นี้ได้',
  message: 'ระบบยังไม่ได้ตั้งค่าเบราว์เซอร์สำหรับเปิดที่อยู่นี้ กรุณาคัดลอกลิงก์ไปเปิดเอง',
  copyUrl: 'คัดลอกลิงก์',
  close: 'ปิด',
  missing: {
    title: 'ไม่พบไฟล์',
    message: 'ไม่มีไฟล์นี้ — อาจถูกลบหรือย้ายแล้ว หรือมีอยู่ในเครื่องอื่น'
  }
}
