import type { Translations } from './types'
export const thConnectorAccounts: Translations['connectorsPage']['accounts'] = {
  heading: 'บัญชี',
  count: (count: number) => `${count} บัญชี`,
  addAnother: 'เพิ่มบัญชีอื่น',
  aliasLabel: 'ชื่อบัญชี',
  aliasHint: 'ใช้ตัวอักษรอังกฤษพิมพ์เล็ก ตัวเลข และขีดกลาง ไม่เกิน 32 ตัว เช่น work หรือ home',
  aliasInvalid: 'ใช้ตัวอักษรอังกฤษพิมพ์เล็ก ตัวเลข และขีดกลาง โดยขึ้นต้นด้วยตัวอักษรหรือตัวเลข',
  aliasTaken: 'ชื่อนั้นถูกใช้ไปแล้ว',
  add: 'เชื่อมต่อ',
  rename: 'เปลี่ยนชื่อ',
  renameLabel: (name: string) => `ชื่อใหม่สำหรับ ${name}`,
  renameGone: 'ไม่พบบัญชีนี้แล้ว บัญชีอาจถูกนำออกหรือแทนที่ด้วยการเชื่อมต่อใหม่',
  remove: 'นำออก',
  removeTitle: (app: string, name: string) => `นำบัญชี ${name} ของ ${app} ออกหรือไม่`,
  removeBody: 'Hermes จะหยุดใช้งานผ่านบัญชีนี้ ส่วนบัญชีอื่นยังเชื่อมต่ออยู่',
  retiredCount: (count: number) => `ถูกแทนที่แล้ว ${count} บัญชี`,
  status: {
    expired: 'การเข้าถึงหมดอายุแล้ว',
    failed: 'ไม่สามารถเชื่อมต่อได้',
    inactive: 'ไม่ได้ใช้งาน',
    pending: 'กำลังรอการเข้าสู่ระบบ',
    retired: 'แทนที่ด้วยการเชื่อมต่อใหม่',
    revoked: 'การเข้าถึงถูกเพิกถอน'
  }
}
