import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import type { DesktopBootstrapState } from '@/global'
import { I18nProvider } from '@/i18n'

import { DesktopInstallOverlay } from './desktop-install-overlay'

afterEach(() => {
  cleanup()
  Reflect.deleteProperty(window, 'hermesDesktop')
})

it('explains a failed installer stage in Thai and retains its original diagnostic', async () => {
  const raw = 'fatal: Remote branch missing-branch not found in upstream origin'

  const state: DesktopBootstrapState = {
    active: false,
    manifest: { type: 'manifest', protocolVersion: 1, stages: [{ name: 'repository' }] },
    stages: { repository: { state: 'failed', error: raw, durationMs: 80, startedAt: null, json: null } },
    error: `Setting up Hermes stopped. Details: ${raw}`,
    log: [],
    startedAt: null,
    completedAt: null,
    setupChoice: null,
    unsupportedPlatform: null,
    bundled: false
  }

  window.hermesDesktop = {
    getBootstrapState: vi.fn().mockResolvedValue(state),
    onBootstrapEvent: vi.fn(() => vi.fn())
  } as never

  render(
    <I18nProvider configClient={null} initialLocale="th">
      <DesktopInstallOverlay />
    </I18nProvider>
  )
  expect(await screen.findByText('การติดตั้งหยุดที่ขั้นตอน “ซอร์สโค้ด Hermes”')).toBeTruthy()
  expect(screen.getByText('ซอร์สโค้ด Hermes')).toBeTruthy()
  expect(
    screen.getAllByText('รายละเอียดทางเทคนิค').some(node => node.closest('details')?.textContent?.includes(raw))
  ).toBe(true)
  expect(screen.getByRole('button', { name: 'โหลดซ้ำแล้วลองอีกครั้ง' })).toBeTruthy()
})
