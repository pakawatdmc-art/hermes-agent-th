import type { GatewayGroupOpenCopy, SkillDeepLinkCopy } from './types_deep_links'
export const thSkillDeepLink: SkillDeepLinkCopy = {
  installTitle: (name: string) => `ติดตั้ง “${name}” หรือไม่?`,
  installDescription: 'ทักษะนี้จะพร้อมใช้ในบทสนทนาใหม่ ติดตั้งจากแหล่งที่คุณไว้ใจเท่านั้น',
  installTo: 'ติดตั้งไปที่',
  thisComputer: 'คอมพิวเตอร์เครื่องนี้',
  installing: 'กำลังติดตั้ง…',
  installComplete: (name: string) => `ติดตั้ง “${name}” แล้ว`,
  destinationChanged: 'ปลายทางการติดตั้งเปลี่ยนแล้ว ปิดหน้าต่างนี้และเปิดลิงก์ติดตั้งอีกครั้ง',
  installed: 'ติดตั้งแล้ว',
  source: 'แหล่งที่มา'
}
export const thGatewayGroupOpen: GatewayGroupOpenCopy = {
  opening: 'กำลังเปิดกลุ่มในเกตเวย์...',
  lookupFailed: 'ค้นหากลุ่มนี้ในเกตเวย์ไม่สำเร็จ กรุณาลองอีกครั้ง',
  missing: 'กลุ่มนี้ไม่มีอยู่ในเกตเวย์แล้ว'
}
