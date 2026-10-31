import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import type { HermesConfigRecord } from '@/hermes'

import { type I18nConfigClient, I18nProvider, useI18n } from './context'

function Probe() {
  const { configLoadError, locale, t } = useI18n()

  return (
    <>
      <span data-testid="language">
        {locale}: {t.common.save}
      </span>
      <span data-testid="load-error">{configLoadError?.message}</span>
    </>
  )
}

afterEach(cleanup)

it('paints the edition language before configuration arrives and preserves a saved English choice', async () => {
  let finish!: (value: HermesConfigRecord) => void

  const configClient: I18nConfigClient = {
    getConfig: vi.fn(
      () =>
        new Promise<HermesConfigRecord>(resolve => {
          finish = resolve
        })
    ),
    saveConfig: vi.fn()
  }

  render(
    <I18nProvider configClient={configClient} defaultLocale="th">
      <Probe />
    </I18nProvider>
  )
  expect(screen.getByTestId('language').textContent).toBe('th: บันทึก')
  finish({ display: { language: 'en' } })
  await waitFor(() => expect(screen.getByTestId('language').textContent).toBe('en: Save'))
  expect(configClient.saveConfig).not.toHaveBeenCalled()
})

it('uses the edition default for an unset or unavailable configuration without saving over it', async () => {
  const configClient: I18nConfigClient = {
    getConfig: vi.fn().mockResolvedValue({}),
    saveConfig: vi.fn()
  }

  const view = render(
    <I18nProvider configClient={configClient} defaultLocale="th">
      <Probe />
    </I18nProvider>
  )

  await waitFor(() => expect(configClient.getConfig).toHaveBeenCalled())
  expect(screen.getByTestId('language').textContent).toBe('th: บันทึก')
  configClient.getConfig = vi.fn().mockRejectedValue(new Error('backend unavailable'))
  view.rerender(
    <I18nProvider configClient={configClient} defaultLocale="th" scopeKey="another-profile">
      <Probe />
    </I18nProvider>
  )
  await waitFor(() => expect(screen.getByTestId('load-error').textContent).toBe('backend unavailable'))
  expect(screen.getByTestId('language').textContent).toBe('th: บันทึก')
  expect(configClient.saveConfig).not.toHaveBeenCalled()
})
