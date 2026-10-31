import type { BillingTranslations } from './types_billing'
// Out-of-credits overlay copy (Nous vs. third-party providers), spread into en.ts.
export const thBilling: BillingTranslations = {
  billingBlock: {
    titleNous: 'เครดิต Nous หมดแล้ว',
    titleProvider: provider => `เครดิตหมด — ${provider}`,
    fallbackMessage: 'บัญชีของคุณไม่มีเครดิต เพิ่มเครดิตเพื่อดำเนินการต่อ',
    openBilling: 'เปิดหน้าค่าบริการ',
    addCredits: 'เติมเครดิต',
    dismiss: 'ยกเลิก'
  }
}
