import type { PluginUpdateTranslations } from './types_plugin_update'
/** Copy for updating an installed plugin (Plugins tab): catalog re-pin consent and the security-scan override. */
export const thPluginUpdate: PluginUpdateTranslations = {
  folderAccess: {
    title: 'การเข้าถึงโฟลเดอร์',
    hint: (name: string) => `${name} สามารถอ่านและเปลี่ยนแปลงไฟล์ในโฟลเดอร์เหล่านี้ได้ การเพิกถอนจะมีผลทันที`,
    revoke: 'เพิกถอน',
    revokeLabel: (path: string) => `เพิกถอนการเข้าถึง ${path}`,
    revoked: (name: string, path: string) => `${name} ไม่สามารถใช้ ${path} ได้อีกต่อไป`,
    revokeFailed: (name: string) => `ไม่สามารถเพิกถอนการเข้าถึงโฟลเดอร์สำหรับ ${name}`,
    pickerTitle: (name: string) => `เลือกโฟลเดอร์สำหรับ ${name}`,
    pickerButton: 'อนุญาตให้เข้าถึง',
    refusedProtected: (name: string) =>
      `${name} ใช้โฟลเดอร์นั้นไม่ได้ เพราะมีการตั้งค่า คีย์ หรือข้อมูลปลั๊กอินของ Hermes อยู่ โปรดเลือกโฟลเดอร์ที่ไม่มีข้อมูลเหล่านี้`,
    loadFailed: (name: string) => `ไม่สามารถโหลดโฟลเดอร์ที่แชร์กับ ${name}`
  },
  updateToPin: (sha: string) => `อัปเดตเป็น ${sha}`,
  updateFailed: (name: string) => `ไม่สามารถอัปเดต ${name} ได้`,
  updated: (name: string) => `อัปเดต ${name} เป็นคอมมิตที่แค็ตตาล็อกกำหนดไว้แล้ว เริ่มเกตเวย์ใหม่เพื่อใช้เวอร์ชันนี้`,
  updateConsentTitle: (name: string) => `${name} ขอเพิ่มความสามารถ`,
  updateConsentBody: (name: string, sha: string) =>
    `คอมมิตใหม่ของ ${name} ที่แค็ตตาล็อกกำหนดไว้ (${sha}) เพิ่มส่วนการทำงานที่เวอร์ชันติดตั้งอยู่ยังไม่มี โปรดอัปเดตเมื่อคุณเชื่อถือส่วนที่เพิ่มเหล่านี้เท่านั้น:`,
  updateConsentConfirm: 'ใช้การอัปเดต',
  updateScanTitle: (name: string) => `การสแกนความปลอดภัยพบข้อควรระวังใน ${name}`,
  updateScanBody: (name: string, count: number) =>
    `ผลสแกนอัปเดตของ ${name} ระบุว่าควรระวัง (พบ ${count} รายการ) ระบบสแกนทุกอัปเดต โปรดดำเนินการต่อเมื่อเชื่อถือแหล่งที่มาเท่านั้น:`,
  updateScanMore: (count: number) => `+ อีก ${count} รายการ`,
  updateScanConfirm: 'อัปเดตต่อไป',
  updateScanBlocked: (name: string) =>
    `การสแกนความปลอดภัยบล็อกอัปเดตของ ${name} เนื่องจากพบว่าเป็นอันตราย ไม่สามารถข้ามการบล็อกนี้ได้`,
  updatedGit: (name: string) => `อัปเดต ${name} เป็นคอมมิตล่าสุดแล้ว`
}
