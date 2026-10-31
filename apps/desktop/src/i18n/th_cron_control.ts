import type { CronControlCopy } from './types_cron_control'

export const thCronControl: CronControlCopy = {
  stop: 'หยุด',
  stopping: 'กำลังหยุด…',
  stopped: 'ยกเลิกรอบงานแล้ว',
  finishedFirst: 'รอบงานเสร็จก่อนที่จะหยุดได้',
  nothingToStop: 'ไม่มีรอบงานที่กำลังทำอยู่',
  failedStop: 'หยุดรอบงานไม่สำเร็จ',
  lastCancelled: (reason: string) => (reason ? `ยกเลิกรอบงานล่าสุดแล้ว: ${reason}` : 'ยกเลิกรอบงานล่าสุดแล้ว'),
  catchUpLabel: 'รอบงานที่พลาด',
  catchUpHint: 'วิธีจัดการรอบงานที่พลาดขณะ Hermes ไม่ได้ทำงาน',
  catchUpChoices: { default: 'ใช้ค่าเริ่มต้น', run: 'เรียกใช้หนึ่งครั้งเมื่อกลับมา', skip: 'ข้าม' }
}
