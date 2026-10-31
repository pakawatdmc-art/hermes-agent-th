import type { UninstallSectionTranslations } from './types_uninstall_section'
// Settings > About > Uninstall, composed by en.ts as `settings.uninstallSection`.
export const thUninstallSection: UninstallSectionTranslations = {
  dangerZone: 'การดำเนินการที่ต้องระวัง',
  checkingInstalled: 'กำลังตรวจสอบสิ่งที่ติดตั้งไว้...',
  uninstallHermes: 'ถอนการติดตั้ง Hermes',
  managedBody: 'การติดตั้งนี้ได้รับการจัดการโดยระบบของคุณ ดังนั้น Hermes จึงไม่สามารถลบตัวเองออกได้',
  dataKept: path => `การตั้งค่า แชต และข้อมูลลับของคุณอยู่ใน ${path} การถอนแอปจะไม่ลบข้อมูลเหล่านี้`,
  openAppsSettings: 'เปิดการตั้งค่าแอป',
  chooseHowMuch:
    'เลือกส่วนที่ต้องการถอนการติดตั้ง แอปจะปิดเพื่อดำเนินการให้เสร็จ คุณสามารถใช้โปรแกรมติดตั้งเพื่อติดตั้งกลับได้ทุกเมื่อ',
  confirmUninstall: 'ยืนยันการถอนการติดตั้ง',
  confirmBody: what => `ระบบจะลบ ${what} และไม่สามารถย้อนคืนได้`,
  appLabel: 'แอป:',
  couldNotStart: 'ไม่สามารถเริ่มการถอนการติดตั้งได้',
  uninstalling: 'กำลังถอนการติดตั้ง...',
  yesUninstall: 'ใช่ ถอนการติดตั้ง',
  options: {
    gui: {
      title: 'ถอนเฉพาะแอป Desktop',
      description: 'ลบแอป Desktop นี้ โดยเก็บ Hermes Agent การตั้งค่า และแชตไว้',
      consequence: 'แอป Desktop และข้อมูลของแอปนี้'
    },
    lite: {
      title: 'ถอนแอปและเอเจนต์ โดยเก็บข้อมูลไว้',
      description: 'ลบแอปและ Hermes Agent โดยเก็บการตั้งค่า แชต และข้อมูลลับไว้ใช้เมื่อติดตั้งใหม่',
      consequence: 'แอป Desktop และ Hermes Agent (เก็บการตั้งค่า แชต และข้อมูลลับไว้)'
    },
    full: {
      title: 'ถอนการติดตั้งทุกอย่าง',
      description:
        'ลบแอป เอเจนต์ และข้อมูลผู้ใช้ทั้งหมด ได้แก่ การตั้งค่า แชต งานที่กำหนดเวลาไว้ ข้อมูลลับ และบันทึกการทำงาน',
      consequence:
        'ทุกอย่าง ได้แก่ แอป Desktop, Hermes Agent และการตั้งค่า แชต ข้อมูลลับ และบันทึกการทำงานทั้งหมดของคุณ'
    }
  }
}
