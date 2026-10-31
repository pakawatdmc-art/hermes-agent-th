import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import { I18nProvider, useI18n } from '@/i18n/context'
import { getRuntimeI18nLocale, setRuntimeI18nLocale } from '@/i18n/runtime'

import { fmtMonth } from './time'

const initialLocale = getRuntimeI18nLocale()
afterEach(() => {
  cleanup()
  setRuntimeI18nLocale(initialLocale)
})

function Month() {
  const { locale, setLocale } = useI18n()

  return (
    <button onClick={() => void setLocale('en')} type="button">
      {locale}: {fmtMonth.format(new Date(2026, 9, 31), locale)}
    </button>
  )
}

it('uses the loaded or selected language for dates in the same render', async () => {
  const config = { display: { language: 'th' } }
  render(
    <I18nProvider
      configClient={{
        getConfig: vi.fn().mockResolvedValue(config),
        saveConfig: vi.fn().mockResolvedValue({ ok: true })
      }}
    >
      <Month />
    </I18nProvider>
  )
  await waitFor(() => expect(screen.getByRole('button', { name: 'th: ตุลาคม' })).toBeTruthy())
  fireEvent.click(screen.getByRole('button'))
  await waitFor(() => expect(getRuntimeI18nLocale()).toBe('en'))
  expect(fmtMonth.format(new Date(2026, 9, 31))).toBe('October')
  await waitFor(() => expect(screen.getByRole('button', { name: 'en: October' })).toBeTruthy())
})
