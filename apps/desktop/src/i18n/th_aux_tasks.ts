import type { AuxTaskCopyMap } from './types_aux_tasks'

export const thAuxTasks: AuxTaskCopyMap = {
  vision: { label: 'การมองเห็น', hint: 'วิเคราะห์ภาพ' },
  compression: { label: 'การย่อบริบท', hint: 'ย่อข้อมูลบริบท' },
  skills_hub: { label: 'ศูนย์ทักษะ', hint: 'ค้นหาทักษะ' },
  approval: { label: 'การอนุญาต', hint: 'อนุญาตอัตโนมัติแบบอัจฉริยะ' },
  mcp: { label: 'MCP', hint: 'เลือกเส้นทางเครื่องมือ MCP' },
  title_generation: { label: 'การตั้งชื่อ', hint: 'ตั้งชื่อบทสนทนา' },
  review: { label: 'การตรวจทาน', hint: 'เอเจนต์ย่อยตรวจทานสำหรับ /review' },
  voice_chat: { label: 'แชตเสียง', hint: 'ตอบด้วยเสียงในโหมดเสียง' },
  triage_specifier: { label: 'ขยายข้อกำหนดงาน', hint: 'เติมรายละเอียดข้อกำหนดงานคัมบัง' },
  kanban_decomposer: { label: 'แบ่งงานคัมบัง', hint: 'แยกงานเป็นงานย่อย' },
  profile_describer: { label: 'บรรยายโปรไฟล์', hint: 'สร้างคำอธิบายโปรไฟล์อัตโนมัติ' },
  curator: { label: 'ผู้ดูแลทักษะ', hint: 'ทบทวนการใช้งานทักษะ' }
}
