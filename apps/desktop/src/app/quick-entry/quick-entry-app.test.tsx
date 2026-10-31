/** Regression coverage for #77429: native picker options must paint a readable surface. */

import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { I18nProvider } from '@/i18n'
import type { QuickEntryStatePush } from '@/store/quick-entry'

import { QuickEntryApp } from './quick-entry-app'
import { QuickEntryLanguageProvider } from './quick-entry-root'

const initialHermesDesktop = window.hermesDesktop

describe('QuickEntryApp', () => {
  let pushState: ((payload: QuickEntryStatePush) => void) | undefined

  beforeEach(() => {
    const listeners = new Set<(payload: QuickEntryStatePush) => void>()

    pushState = payload => {
      listeners.forEach(listener => listener(payload))
    }

    window.hermesDesktop = {
      quickEntry: {
        dismiss: vi.fn(),
        onShown: vi.fn(() => vi.fn()),
        onState: vi.fn(callback => {
          listeners.add(callback)

          return () => {
            listeners.delete(callback)
          }
        }),
        onLateResult: vi.fn(() => vi.fn()),
        submit: vi.fn()
      }
    } as never
  })

  afterEach(() => {
    cleanup()
    window.hermesDesktop = initialHermesDesktop
    vi.restoreAllMocks()
  })

  it('paints every native target option with matching theme foreground and background tokens', () => {
    render(<QuickEntryApp />)

    act(() => {
      pushState?.({
        connected: true,
        sessions: [{ id: 'session-1', title: 'A recent session' }]
      })
    })

    const options = screen.getAllByRole('option') as HTMLOptionElement[]
    expect(options).toHaveLength(3)

    for (const option of options) {
      expect(option.style.color).toBe('var(--ui-text-primary, var(--foreground))')
      expect(option.style.backgroundColor).toBe('var(--ui-bg-elevated, var(--background))')
    }
  })

  it('shows Thai entry guidance and target names without altering a Thai draft', () => {
    render(
      <I18nProvider configClient={null} initialLocale="th">
        <QuickEntryApp />
      </I18nProvider>
    )
    expect(screen.getByPlaceholderText('ยังไม่ได้เชื่อมต่อ เปิด Hermes เพื่อเชื่อมต่ออีกครั้ง')).toBeTruthy()
    act(() => {
      pushState?.({ connected: true, sessions: [] })
    })
    expect(screen.getByRole('option', { name: 'บทสนทนาปัจจุบัน' })).toBeTruthy()
    expect(screen.getByRole('option', { name: 'บทสนทนาใหม่' })).toBeTruthy()
    expect(screen.getByPlaceholderText('ถาม Hermes…')).toBeTruthy()
  })

  it('follows the primary profile language and keeps unsent Thai text when it changes', () => {
    render(
      <QuickEntryLanguageProvider>
        <QuickEntryApp />
      </QuickEntryLanguageProvider>
    )
    expect(screen.getByRole('option', { name: 'บทสนทนาปัจจุบัน' })).toBeTruthy()
    act(() => {
      pushState?.({ connected: true, locale: 'en', sessions: [] })
    })
    const input = screen.getByPlaceholderText('Ask Hermes…') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'สรุปบันทึกประชุมให้ฉัน' } })
    act(() => {
      pushState?.({ connected: true, locale: 'th', sessions: [] })
    })
    expect(screen.getByRole('option', { name: 'บทสนทนาใหม่' })).toBeTruthy()
    expect((screen.getByPlaceholderText('ถาม Hermes…') as HTMLInputElement).value).toBe('สรุปบันทึกประชุมให้ฉัน')
  })
})
