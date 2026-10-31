import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { type I18nConfigClient, I18nProvider, useI18n } from './context'
import { en } from './en'
import { languageOptions, normalizeLocale } from './languages'
import { th } from './th'

function leaves(value: unknown, prefix = ''): Map<string, unknown> {
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    return new Map(
      Object.entries(value)
        .filter(([key]) => prefix || key !== 'intro')
        .flatMap(([key, item]) => [...leaves(item, prefix ? `${prefix}.${key}` : key)])
    )
  }

  return new Map([[prefix, value]])
}

function LanguageControls() {
  const { locale, setLocale, t } = useI18n()

  return (
    <>
      <p>{locale}</p>
      <button onClick={() => void setLocale('th')} type="button">
        {t.language.label}
      </button>
      <span>{t.common.save}</span>
      <span>{t.assistant.approval.reject}</span>
    </>
  )
}

afterEach(cleanup)

describe('bundled Thai Desktop', () => {
  it.each(['th', 'TH-th', 'th_TH', 'Thai', 'ไทย', 'ภาษาไทย'])('resolves %s to the Thai catalog', alias => {
    expect(normalizeLocale(alias)).toBe('th')
    expect(languageOptions()).toContainEqual(expect.objectContaining({ id: 'th', endonym: 'ไทย', rtl: false }))
  })

  it('renders Thai before a backend is available and saves the selected language', async () => {
    const configClient: I18nConfigClient = {
      getConfig: vi.fn().mockResolvedValue({ display: { language: 'en', compact: true } }),
      saveConfig: vi.fn().mockResolvedValue({ ok: true })
    }

    const first = render(
      <I18nProvider configClient={null} initialLocale="th-TH">
        <LanguageControls />
      </I18nProvider>
    )

    expect(screen.getByText('บันทึก')).toBeTruthy()
    expect(screen.getByText('ไม่อนุญาต')).toBeTruthy()
    expect(globalThis.document.documentElement.lang).toBe('th')
    first.unmount()

    render(
      <I18nProvider configClient={configClient}>
        <LanguageControls />
      </I18nProvider>
    )
    await waitFor(() => expect(screen.getByRole('button', { name: 'Language' })).toBeTruthy())
    fireEvent.click(screen.getByRole('button', { name: 'Language' }))
    await waitFor(() =>
      expect(configClient.saveConfig).toHaveBeenCalledWith({ display: { language: 'th', compact: true } })
    )
    expect(screen.getByText('บันทึก')).toBeTruthy()
    expect(globalThis.document.documentElement.dir).toBe('ltr')
  })

  it('authors the complete English catalog shape without merging English fallback', () => {
    const english = leaves(en)
    const thai = leaves(th)
    expect([...thai.keys()].sort()).toEqual([...english.keys()].sort())

    for (const [key, value] of english) {
      const translated = thai.get(key)
      expect(Array.isArray(translated) ? 'array' : typeof translated, key).toBe(
        Array.isArray(value) ? 'array' : typeof value
      )

      if (Array.isArray(value)) {
        expect(translated, key).toHaveLength(value.length)
      }

      if (typeof translated === 'string') {
        expect(translated, key).not.toMatch(/ZXQ\d+XQZ|⟪HARG\d+⟫/)
      }
    }
  })

  it('preserves dynamic values and protected instructions in translated output', () => {
    const thai = leaves(th)

    for (const [key, value] of leaves(en)) {
      const translated = thai.get(key)

      if (typeof value === 'string' && typeof translated === 'string') {
        for (const token of value.match(/`[^`]+`/g) ?? []) {
          expect(translated, key).toContain(token)
        }

        // Slash commands remain executable when copied from help text.
        for (const command of value.match(/(?<![\w:/])\/[a-z][a-z0-9_-]*|--[a-z][a-z0-9_-]*/g) ?? []) {
          if (command !== '/mo') {
            expect(translated, key).toContain(command)
          }
        }
      }

      if (typeof value !== 'function' || typeof translated !== 'function') {
        continue
      }

      expect(translated.length, key).toBe(value.length)
      const probes = Array.from({ length: value.length }, (_, index) => `⟦${index}⟧`)
      let expected: string

      try {
        expected = JSON.stringify(value(...probes))
      } catch {
        continue
      }

      const actual = JSON.stringify(translated(...probes))

      for (const probe of probes.filter(p => expected.includes(p))) {
        expect(actual, key).toContain(probe)
      }

      expect(actual, key).not.toMatch(/ZXQ\d+XQZ|⟪HARG\d+⟫/)
    }
  })

  it('keeps command usage examples executable', () => {
    const copy = th.promptNotices.desktopCommands
    expect(copy.rollbackUsage).toContain('/rollback [list] | diff <n|hash> | <n|hash> [file] [--all]')
    expect(copy.saveUsage).toContain('/save [json|md|html] [filename] [redact]')
    expect(copy.timestampsUsage).toContain('/timestamps [on|off|status]')
  })

  it('keeps approval scopes distinct and explains uncertain delivery without claiming failure', () => {
    expect(th.assistant.approval.allowSession).toBe('อนุญาตตลอดบทสนทนานี้')
    expect(th.assistant.approval.alwaysAllow).toBe('อนุญาตเสมอ')
    expect(th.assistant.approval.reject).toBe('ไม่อนุญาต')
    const uncertain = th.assistant.thread.errorCodes.SESSION_OWNER_UNCONFIRMED
    expect(uncertain.title).toContain('อาจอยู่ในคิวแล้ว')
    expect(uncertain.body).toContain('ก่อนส่งซ้ำ')
  })
})
