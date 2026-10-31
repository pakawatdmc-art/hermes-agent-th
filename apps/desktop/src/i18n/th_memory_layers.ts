import type { MemoryLayersTranslations } from './types_memory_layers'

export const thMemoryLayers: MemoryLayersTranslations = {
  activeProvider: 'ผู้ให้บริการความจำที่ใช้งานอยู่',
  selectedProvider: 'ผู้ให้บริการความจำที่เลือก',
  selectedDesc: current => `ยังไม่มีผล: บทสนทนาจะใช้ ${current} ต่อจนกว่าจะบันทึกตัวเลือกนี้`,
  builtinMemory: 'ความจำในตัวเท่านั้น',
  noProvider: 'ไม่มี — ใช้ความจำในตัวเท่านั้น',
  noProviderDesc:
    'Hermes ใช้เฉพาะระบบความจำในตัวด้านล่าง หากต้องการเพิ่มผู้ให้บริการภายนอก ให้เลือกใน การตั้งค่า › ความจำและบริบท',
  providerDesc: name => `${name} เพิ่มการค้นคืนความจำให้ทุกบทสนทนา เสริมจากระบบความจำในตัว`,
  providerNotReadyDesc: name =>
    `บันทึกให้ใช้ ${name} แล้ว แต่จะยังไม่เพิ่มการค้นคืนความจำจนกว่าจะพร้อม ระบบความจำในตัวยังคงทำงานตามปกติ`,
  providerUnknownDesc: name => `บันทึกให้ใช้ ${name} แล้ว แต่ Hermes ตรวจสอบไม่ได้ว่าพร้อมใช้งานหรือไม่`,
  statusUnavailable: 'ไม่มีข้อมูลสถานะความจำ',
  statusUnavailableDesc: 'ตรวจสอบไม่ได้ว่ากำลังใช้ผู้ให้บริการความจำรายใด หรือพร้อมใช้งานหรือไม่',
  retry: 'ลองอีกครั้ง',
  status: {
    ready: 'พร้อม',
    needs_config: 'ต้องตั้งค่า',
    unavailable: 'ไม่พร้อมใช้งาน',
    missing: 'ยังไม่ได้ติดตั้ง'
  },
  builtinLayer: 'ระบบความจำในตัว',
  onByDefault: 'เปิดตามค่าเริ่มต้น',
  on: 'เปิด',
  off: 'ปิด',
  onlyFile: file => `${file} เท่านั้น`,
  builtinDesc:
    'MEMORY.md และ USER.md เป็นความจำของ Hermes เอง แยกจากผู้ให้บริการภายนอก โดยค่าเริ่มต้น ทั้งสองไฟล์จะถูกโหลดเข้าสู่บทสนทนา คุณปิดแต่ละส่วนได้ด้วยสวิตช์ความจำและโปรไฟล์ผู้ใช้ใน การตั้งค่า › ความจำและบริบท ผู้ให้บริการภายนอกทำงานเสริมระบบนี้โดยไม่แทนที่'
}
