import { thDesktopCommands } from './th_desktop_commands'
import { thSessionCommands } from './th_session_commands'
import type { Translations } from './types'
// Shell notices (remote-display toast, butterbar, keep-awake offer), spread into en.ts.
export const thNotices = {
  remoteDisplayBanner: {
    message: reason =>
      `กำลังใช้ซอฟต์แวร์แสดงผล เนื่องจากตรวจพบจอระยะไกล (${reason}) จึงปิดการเร่งความเร็วด้วย GPU เพื่อป้องกันภาพกะพริบ`
  },
  butterbar: {
    goTo: (index, total) => `แสดงประกาศที่ ${index} จาก ${total}`,
    legal: {
      before: 'การใช้งาน Hermes Agent อยู่ภายใต้',
      terms: 'ข้อกำหนดในการให้บริการ',
      between: ' และ ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      after: '.'
    }
  },
  promptNotices: {
    legacySendUnconfirmed:
      'เซิร์ฟเวอร์นี้ไม่สามารถยืนยันการส่งข้อความนี้ก่อนหน้านี้ได้ ดังนั้นจึงอาจทำงานไปแล้ว ตรวจสอบการสนทนาก่อนที่จะส่งอีกครั้ง',
    restoredDraftAttachmentsDropped:
      'ไฟล์แนบจากข้อความที่ยังไม่ได้ส่งของคุณยังไม่ได้รับการกู้คืน แนบไฟล์เหล่านั้นอีกครั้งก่อนที่จะส่ง',
    mcpReloadDeferred:
      'แชตนี้กำลังทำงาน การเปลี่ยนแปลง MCP จะมีผลเมื่องานรอบนี้จบและโหลด MCP ใหม่ หรือเมื่อคุณเปิดแชตอีกครั้ง',
    mcpReloadUnavailable: servers => `ไม่ได้เชื่อมต่อ: ${servers}`,
    compactedTurnUnavailable: 'ข้อความนี้ถูกรวมไว้ในบทสรุปตอนย่อบริบทของแชต จึงคืนค่าหรือแก้ไขข้อความเดิมไม่ได้แล้ว',
    staleTurnUnavailable: 'ข้อความนี้ไม่อยู่ในประวัติของแชตแล้ว',
    sessionCommands: thSessionCommands,
    desktopCommands: thDesktopCommands
  },
  keepAwakeOffer: {
    title: 'คอมพิวเตอร์ของคุณเข้าสู่โหมดสลีปขณะที่ Hermes กำลังทำงาน',
    message:
      'Hermes สามารถป้องกันเครื่องเข้าสู่โหมดสลีประหว่างทำงานได้ โดยหน้าจอยังปิดได้ตามปกติ ทั้งนี้ เครื่องอาจยังเข้าสู่โหมดสลีปเมื่อใช้แบตเตอรี่',
    action: 'ป้องกันเครื่องพักระหว่างทำงาน'
  },
  connectorOffer: {
    heading: 'เก็บแอปที่เชื่อมต่อของคุณไว้',
    body: 'เข้าสู่ระบบด้วยบัญชี Nous ฟรีเพื่อเก็บแอปที่คุณเชื่อมต่อ เช่น Gmail หรือ Slack ไว้ในบัญชีของคุณ'
  }
} satisfies Pick<
  Translations,
  'remoteDisplayBanner' | 'butterbar' | 'promptNotices' | 'keepAwakeOffer' | 'connectorOffer'
>
