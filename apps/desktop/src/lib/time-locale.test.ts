import { afterEach, describe, expect, it } from 'vitest'

import { getRuntimeI18nLocale, setRuntimeI18nLocale } from '@/i18n/runtime'

import { fmtClock, fmtDate, fmtMonth, fmtMonthYear, relativeTime } from './time'

const initialLocale = getRuntimeI18nLocale()
afterEach(() => setRuntimeI18nLocale(initialLocale))

describe('dates follow the chosen UI language', () => {
  it('changes already-imported formatters when switching languages and keeps Gregorian years explicit', () => {
    const date = new Date(2026, 9, 31, 17, 15)
    setRuntimeI18nLocale('th')
    expect(fmtMonth.format(date)).toBe('ตุลาคม')
    expect(fmtMonthYear.format(date)).toContain('ค.ศ. 2026')
    expect(fmtDate.format(date)).toContain('2026')
    expect(fmtDate.format(date)).not.toContain('2569')
    expect(fmtClock.format(date)).toBe('17:15')
    setRuntimeI18nLocale('en')
    expect(fmtMonth.format(date)).toBe('October')
    expect(fmtMonthYear.format(date)).not.toContain('ค.ศ.')
  })

  it('renders relative time in Thai without altering the target timestamp', () => {
    const now = Date.UTC(2026, 9, 31, 10)
    const target = now + 120_000
    setRuntimeI18nLocale('th')
    expect(relativeTime(target, now)).toBe(
      new Intl.RelativeTimeFormat('th', {
        numeric: 'auto',
        style: 'short'
      }).format(2, 'minute')
    )
    setRuntimeI18nLocale('en')
    expect(relativeTime(target, now)).toBe(
      new Intl.RelativeTimeFormat('en', {
        numeric: 'auto',
        style: 'short'
      }).format(2, 'minute')
    )
    expect(target).toBe(now + 120_000)
  })
})
