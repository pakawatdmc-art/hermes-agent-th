import type { PluginPreviewAccessTranslations } from './types_plugin_preview_access'

export const thPluginPreviewAccess: PluginPreviewAccessTranslations = {
  previewScriptPromptTitle: (plugin: string) => `อนุญาตให้ ${plugin} เรียกใช้สคริปต์ในหน้านี้หรือไม่?`,
  previewScriptPromptBody: (plugin: string, origin: string) =>
    `${plugin} ต้องการเรียกใช้ JavaScript ในเบราว์เซอร์ตัวอย่างที่ ${origin}`,
  previewScriptPromptRisk: 'สคริปต์อ่านและเปลี่ยนแปลงทุกอย่างบนเว็บไซต์นั้นได้ รวมถึงหน้าของบัญชีที่คุณเข้าสู่ระบบไว้',
  previewScriptPromptRevokeHint: 'มีผลกับเว็บไซต์นี้เท่านั้น คุณเพิกถอนสิทธิ์ได้ใน ความสามารถ ▸ ปลั๊กอิน',
  previewScriptAllow: 'อนุญาตบนเว็บไซต์นี้',
  previewScriptDeny: 'ไม่อนุญาต',
  previewScriptAccessLabel: 'สคริปต์บนหน้าเว็บ',
  previewScriptAccessNone: 'ถามก่อนเรียกใช้สคริปต์บนหน้าเว็บ',
  previewScriptRevoke: (origin: string) => `เพิกถอนสิทธิ์เข้าถึง ${origin}`,
  previewScriptRevoked: (plugin: string, origin: string) => `${plugin} เรียกใช้สคริปต์บน ${origin} ไม่ได้อีกต่อไป`,
  previewScriptRevokeUnsaved: (plugin: string, origin: string) =>
    `บันทึกการเปลี่ยนแปลงไม่สำเร็จ จึงมีผลจนกว่า Hermes จะเริ่มใหม่เท่านั้น ขณะนี้ ${plugin} ถูกบล็อกบน ${origin} แล้ว`
}
