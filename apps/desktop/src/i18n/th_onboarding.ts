import type { Translations } from './types'

export const thOnboarding: Translations['onboarding'] = {
  headerTitle: 'เริ่มตั้งค่า Hermes Agent',
  headerDesc: 'เชื่อมต่อผู้ให้บริการโมเดลเพื่อเริ่มแชต โดยตัวเลือกส่วนใหญ่เชื่อมต่อได้ในคลิกเดียว',
  preparingInstall: 'Hermes กำลังติดตั้งขั้นสุดท้าย โดยปกติการเริ่มใช้ครั้งแรกจะใช้เวลาไม่ถึงหนึ่งนาที',
  starting: 'กำลังเริ่ม Hermes…',
  setupSlowTitle: 'การตั้งค่าใช้เวลานานกว่าปกติ',
  setupSlowBody: 'Hermes ยังเริ่มทำงานอยู่เบื้องหลัง',
  continueWithoutSetup: 'ดำเนินการต่อโดยยังไม่ตั้งค่า',
  lookingUpProviders: 'กำลังค้นหาผู้ให้บริการโมเดล…',
  collapse: 'ยุบ',
  otherProviders: 'ผู้ให้บริการโมเดลอื่น',
  haveApiKey: 'ฉันมี API key',
  chooseLater: 'เลือกผู้ให้บริการโมเดลภายหลัง',
  recommended: 'แนะนำ',
  connected: 'เชื่อมต่อแล้ว',
  featuredPitch: 'สมัครสมาชิกครั้งเดียว ใช้โมเดลชั้นนำกว่า 300 รุ่น — วิธีที่แนะนำสำหรับใช้งาน Hermes',
  fireworksPitch: 'เชื่อมต่อ API ของโมเดลโดยตรง — โมเดลชั้นนำที่ให้บริการโดย Fireworks',
  localModelsTitle: 'เรียกใช้โมเดลในเครื่อง',
  localModelsPitch: 'ไม่ต้องมีบัญชี — ดาวน์โหลดโมเดลแล้วเรียกใช้บนเครื่องนี้',
  openRouterPitch: 'คีย์เดียว ใช้โมเดลได้หลายร้อยรุ่น — ตัวเลือกเริ่มต้นที่เหมาะสม',
  apiKeyOptions: {
    fireworks: {
      short: 'API โมเดลโดยตรง',
      description: 'เข้าถึงโมเดลที่ให้บริการโดย Fireworks AI โดยตรง'
    },
    openrouter: {
      short: 'คีย์เดียว หลายโมเดล',
      description: 'ใช้โมเดลหลายร้อยรุ่นผ่านคีย์เดียว เหมาะเป็นตัวเลือกเริ่มต้นสำหรับการติดตั้งใหม่'
    },
    openai: { short: 'โมเดลตระกูล GPT', description: 'เข้าถึงโมเดล OpenAI โดยตรง' },
    gemini: { short: 'โมเดล Gemini', description: 'เข้าถึงโมเดล Google Gemini โดยตรง' },
    xai: { short: 'โมเดล Grok', description: 'เข้าถึงโมเดล xAI Grok โดยตรง' },
    local: {
      short: 'โฮสต์เอง',
      description:
        'เชื่อม Hermes กับปลายทางที่เข้ากันได้กับ OpenAI บนเครื่องหรือที่โฮสต์เอง (vLLM, llama.cpp, Ollama เป็นต้น)'
    }
  },
  backToSignIn: 'กลับไปเข้าสู่ระบบ',
  getKey: 'รับ API key',
  replaceCurrent: 'แทนที่ค่าปัจจุบัน',
  pasteApiKey: 'วาง API key',
  localApiKeyPlaceholder: 'API key (ไม่บังคับ — ระบุเฉพาะเมื่อปลายทางต้องการ)',
  localModelNamePlaceholder: 'ชื่อโมเดล (เช่น command-a-plus-05-2026)',
  couldNotSave: 'บันทึกข้อมูลรับรองไม่สำเร็จ',
  connecting: 'กำลังเชื่อมต่อ',
  update: 'อัปเดต',
  flowSubtitles: {
    pkce: 'เปิดเบราว์เซอร์เพื่อเข้าสู่ระบบ แล้วดำเนินการต่อที่นี่',
    device_code: 'เปิดหน้ายืนยันในเบราว์เซอร์ — Hermes จะเชื่อมต่อโดยอัตโนมัติ',
    external: 'เข้าสู่ระบบในเทอร์มินัลครั้งเดียว แล้วกลับมาแชต'
  },
  startingSignIn: provider => `กำลังเริ่มเข้าสู่ระบบ ${provider}…`,
  verifyingCode: provider => `กำลังยืนยันรหัสของคุณกับ ${provider}…`,
  connectedProvider: provider => `เชื่อมต่อ ${provider} แล้ว`,
  connectedPicking: provider => `เชื่อมต่อ ${provider} แล้ว กำลังเลือกโมเดลเริ่มต้น…`,
  signInFailed: 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองอีกครั้ง',
  signInExpired:
    'หน้าเข้าสู่ระบบหมดเวลาก่อนที่คุณจะดำเนินการเสร็จ ลองอีกครั้งและทำขั้นตอนในเบราว์เซอร์ให้เสร็จภายในไม่กี่นาที หรือใช้ API key',
  signInDidNotFinish: provider =>
    `เข้าสู่ระบบ ${provider} ไม่เสร็จสมบูรณ์ ตรวจสอบการเชื่อมต่ออินเทอร์เน็ตแล้วลองอีกครั้ง หรือเลือกผู้ให้บริการโมเดลอื่น`,
  tryAgain: 'ลองอีกครั้ง',
  useApiKeyInstead: 'ใช้ API key',
  errorDetails: 'รายละเอียด',
  pickDifferentProvider: 'เลือกผู้ให้บริการโมเดลอื่น',
  signInWith: provider => `เข้าสู่ระบบด้วย ${provider}`,
  openedBrowser: provider => `เปิด ${provider} ในเบราว์เซอร์ของคุณแล้ว`,
  authorizeThere: 'อนุญาตให้ Hermes เข้าถึงจากหน้านั้น',
  copyAuthCode: 'คัดลอกรหัสอนุญาต แล้ววางด้านล่าง',
  pasteAuthCode: 'วางรหัสอนุญาต',
  reopenAuthPage: 'เปิดหน้าอนุญาตอีกครั้ง',
  waitingAuthorize: 'กำลังรอคุณอนุญาต…',
  externalPending: provider =>
    `${provider} ใช้ CLI ของตนเองสำหรับเข้าสู่ระบบ เรียกใช้คำสั่งนี้ในเทอร์มินัล แล้วกลับมาเลือก “ฉันเข้าสู่ระบบแล้ว”:`,
  signedIn: 'ฉันเข้าสู่ระบบแล้ว',
  deviceCodeOpened: provider => `เปิด ${provider} ในเบราว์เซอร์ของคุณแล้ว ป้อนรหัสนี้ที่หน้านั้น:`,
  reopenVerification: 'เปิดหน้ายืนยันอีกครั้ง',
  copy: 'คัดลอก',
  defaultModel: 'โมเดลเริ่มต้น',
  freeTier: 'ระดับใช้ฟรี',
  pro: 'Pro',
  free: 'ฟรี',
  price: (input, output) => `${input} ขาเข้า / ${output} ขาออก ต่อหนึ่งล้านโทเคน`,
  change: 'เปลี่ยน',
  startChatting: 'เริ่มต้น',
  docs: provider => `เอกสาร ${provider}`
}
