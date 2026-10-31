import type { Translations } from './types'

export const thModelMenu: Translations['shell']['modelMenu'] = {
  pickDeferred: (model: string) => `จะใช้ ${model} ตั้งแต่ข้อความถัดไปของคุณ`,
  search: 'ค้นหาโมเดล',
  noModels: 'ไม่พบโมเดล',
  editModels: 'แก้ไขโมเดล…',
  followDefault: 'ใช้การตั้งค่าเริ่มต้น',
  refreshModels: 'รีเฟรชโมเดล',
  favorites: 'รายการโปรด',
  addFavorite: 'เพิ่มในรายการโปรด',
  removeFavorite: 'ลบออกจากรายการโปรด',
  favoriteShortcut: '⇧ คลิก',
  fast: 'เร็ว',
  free: 'ฟรี',
  cacheRead: 'อ่านแคช',
  priceTitle: (input: string, output: string, cache: string) =>
    `ขาเข้า ${input}/ล้านโทเคน · ขาออก ${output}/ล้านโทเคน` + (cache ? ` · อ่านแคช ${cache}/ล้านโทเคน` : ''),
  localSetup: {
    title: 'เรียกใช้ในเครื่อง · ฟรีและเป็นส่วนตัว',
    text: (model: string, size: string) => `${model} เหมาะกับเครื่องนี้ · ดาวน์โหลด ${size}`,
    action: 'ตั้งค่า'
  },
  limited: 'ถึงขีดจำกัด',
  limitedUntil: (time: string) => `จำกัดจนถึง ${time}`,
  limitedTip: (provider: string, time: null | string) =>
    time
      ? `${provider} ถึงขีดจำกัดการใช้งานแล้ว จะรีเซ็ตเวลา ${time} คุณยังเลือกโมเดลไว้ใช้ภายหลังได้`
      : `${provider} ถึงขีดจำกัดการใช้งานแล้ว คุณยังเลือกโมเดลไว้ใช้หลังรีเซ็ตได้`,
  modelResets: (time: string) => `รีเซ็ต ${time}`,
  modelLimitedTip: (time: string) => `โมเดลนี้ถึงขีดจำกัดของตัวเองแล้ว จะรีเซ็ตเวลา ${time} โมเดลอื่นที่นี่ยังใช้ได้`,
  usageLeft: (percent: number, time: null | string) =>
    time ? `เหลือ ${percent}% · รีเซ็ต ${time}` : `เหลือ ${percent}%`,
  poolAccounts: (count: number) => `${count} บัญชี`,
  poolLimited: (limited: number, total: number) => `บัญชีถึงขีดจำกัด ${limited}/${total}`,
  poolAccount: (number: number) => `บัญชี ${number}`,
  poolUnknown: 'ไม่มีข้อมูลการใช้งาน',
  poolUnavailable: 'เข้าสู่ระบบอีกครั้ง',
  usageTip: (provider: string) => `${provider} ใกล้ถึงขีดจำกัดการใช้งานแล้ว`,
  usageWindow: (label: string, percent: number, time: null | string) =>
    time ? `${label}: เหลือ ${percent}% รีเซ็ต ${time}` : `${label}: เหลือ ${percent}%`
}
