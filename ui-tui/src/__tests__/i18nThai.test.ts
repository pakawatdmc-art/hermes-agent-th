import { readFileSync } from 'node:fs'

import { load } from 'js-yaml'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { imageToken } from '../domain/attachments.js'
import { en } from '../i18n/en.js'
import { flattenKeys } from '../i18n/keys.js'
import { resetTuiLocaleSync, syncTuiLocale } from '../i18n/loader.js'
import { $locale, resetLocale, t } from '../i18n/runtime.js'
import type { TranslationKey } from '../i18n/types.js'

const messages = load(readFileSync(new URL('../../../locales/th.tui.yaml', import.meta.url), 'utf8')) as Record<
  string,
  string
>

const pack = { lang: 'th', messages, surface: 'tui' }

afterEach(() => {
  resetLocale()
  resetTuiLocaleSync()
})

describe('shipped Thai TUI catalog', () => {
  it('covers every English message and preserves each runtime argument', async () => {
    expect(Object.keys(messages).sort()).toEqual(flattenKeys(en))
    await syncTuiLocale({ request: vi.fn().mockResolvedValue(pack) } as never, 'th')

    for (const key of flattenKeys(en)) {
      expect(messages[key], key).toBeTypeOf('string')
      const source = key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown>)[part], en)

      if (typeof source === 'function') {
        const args = Array.from({ length: source.length }, (_, index) => `ARG${index}`)
        const rendered = t(key as TranslationKey, ...args)

        for (const arg of args) {
          expect(rendered, key).toContain(arg)
        }

        expect(rendered, key).not.toMatch(/\{\d+\}/)
      } else {
        expect(t(key as TranslationKey), key).toBe(messages[key])
      }
    }
  })

  it('loads Thai through the catalog RPC and keeps permission and billing actions explicit', async () => {
    const request = vi.fn().mockResolvedValue(pack)

    await syncTuiLocale({ request } as never, ' TH ')
    expect(request).toHaveBeenCalledWith('i18n.catalog', { lang: 'th', surface: 'tui' })
    expect($locale.get()).toBe('th')
    expect(t('status.ready')).toBe('พร้อม')
    expect(t('prompt.approval.once')).toBe('อนุญาตครั้งนี้')
    expect(t('prompt.approval.deny')).toBe('ไม่อนุญาต')
    expect(t('billing.confirm.payNow', '$12.50')).toBe('ชำระ $12.50 ตอนนี้')
    expect(t('subscription.confirm.cancelBody', 'Pro', '31/10/2026')).toContain('31/10/2026')
    expect(t('pickers.model.plan.limitReached', 'รายวัน')).toBe('ถึงขีดจำกัดรายวันแล้ว')
    expect(imageToken(2)).toBe('[[ ภาพ 2 ]]')

    await syncTuiLocale({ request } as never, 'en')
    expect(t('status.ready')).toBe(en.status.ready)
    expect(request).toHaveBeenCalledTimes(1)
  })
})
