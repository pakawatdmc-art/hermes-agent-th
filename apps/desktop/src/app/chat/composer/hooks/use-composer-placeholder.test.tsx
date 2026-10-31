import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import { I18nProvider } from '@/i18n'
import { en } from '@/i18n/en'
import { th } from '@/i18n/th'

import { useComposerPlaceholder } from './use-composer-placeholder'

vi.mock('@/store/composer-input-history', () => ({ resetBrowseState: vi.fn() }))

function Probe({ sessionId }: { sessionId: string | null }) {
  const placeholder = useComposerPlaceholder({ disabled: false, reconnecting: false, sessionId })

  return <span>{placeholder}</span>
}

afterEach(cleanup)

it('updates the resting placeholder when the locale loads without changing the conversation', () => {
  const view = render(
    <I18nProvider configClient={null} initialLocale="en">
      <Probe sessionId={null} />
    </I18nProvider>
  )

  expect(en.composer.newSessionPlaceholders).toContain(screen.getByText(/.+/).textContent)
  view.rerender(
    <I18nProvider configClient={null} initialLocale="th">
      <Probe sessionId={null} />
    </I18nProvider>
  )
  expect(th.composer.newSessionPlaceholders).toContain(screen.getByText(/.+/).textContent)
})

it('keeps a starter when the draft becomes a stored conversation', () => {
  const view = render(
    <I18nProvider configClient={null} initialLocale="th">
      <Probe sessionId={null} />
    </I18nProvider>
  )

  const starter = screen.getByText(/.+/).textContent
  view.rerender(
    <I18nProvider configClient={null} initialLocale="th">
      <Probe sessionId="stored-session" />
    </I18nProvider>
  )
  expect(screen.getByText(/.+/).textContent).toBe(starter)
})
