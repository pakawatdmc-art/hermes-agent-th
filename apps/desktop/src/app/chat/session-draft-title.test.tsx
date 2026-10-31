import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it } from 'vitest'

import { I18nProvider, resolveTranslations, setRuntimeI18nLocale, useI18n } from '@/i18n'
import { clearSessionDraft, draftTitleFor, stashSessionDraft } from '@/store/composer'

import { SessionDraftTitle } from './session-draft-title'

const scopes = [null, 'thai-draft', 'english-draft'] as const

function DraftTabs() {
  const { setLocale } = useI18n()

  return (
    <>
      <button onClick={() => void setLocale('th')}>Thai</button>
      <button onClick={() => void setLocale('en')}>English</button>
      <span data-testid="new-draft">
        <SessionDraftTitle scope={null} />
      </span>
      <span data-testid="thai-draft">
        <SessionDraftTitle scope="thai-draft" />
      </span>
      <span data-testid="english-draft">
        <SessionDraftTitle scope="english-draft" />
      </span>
    </>
  )
}

beforeEach(() => {
  for (const scope of scopes) {
    clearSessionDraft(scope)
  }
})

afterEach(() => {
  cleanup()

  for (const scope of scopes) {
    clearSessionDraft(scope)
  }

  setRuntimeI18nLocale('en')
})

it('updates an empty draft tab in place when the app language changes', async () => {
  render(
    <I18nProvider configClient={null} initialLocale="en">
      <DraftTabs />
    </I18nProvider>
  )

  const tab = screen.getByTestId('new-draft')
  expect(tab.textContent).toBe(resolveTranslations('en').sidebar.nav['new-session'])

  await act(() => {
    fireEvent.click(screen.getByRole('button', { name: 'Thai' }))
  })
  expect(screen.getByTestId('new-draft')).toBe(tab)
  expect(tab.textContent).toBe(resolveTranslations('th').sidebar.nav['new-session'])
  expect(draftTitleFor(null)).toBe('')

  await act(() => {
    fireEvent.click(screen.getByRole('button', { name: 'English' }))
  })
  expect(tab.textContent).toBe(resolveTranslations('en').sidebar.nav['new-session'])
})

it('keeps Thai and English draft names while switching languages and updating one composer', async () => {
  const thai = 'แผนงานภาษาไทย'
  const english = 'Review deployment plan'
  stashSessionDraft('thai-draft', thai, [])
  stashSessionDraft('english-draft', english, [])
  render(
    <I18nProvider configClient={null} initialLocale="en">
      <DraftTabs />
    </I18nProvider>
  )

  const thaiTab = screen.getByTestId('thai-draft')
  const englishTab = screen.getByTestId('english-draft')
  expect(thaiTab.textContent).toBe(thai)
  expect(englishTab.textContent).toBe(english)

  await act(() => {
    fireEvent.click(screen.getByRole('button', { name: 'Thai' }))
  })
  expect(thaiTab.textContent).toBe(thai)
  expect(englishTab.textContent).toBe(english)
  expect(draftTitleFor('thai-draft')).toBe(thai)
  expect(draftTitleFor('english-draft')).toBe(english)

  act(() => stashSessionDraft('thai-draft', 'แก้ไขแผนงาน', []))
  expect(thaiTab.textContent).toBe('แก้ไขแผนงาน')
  expect(englishTab.textContent).toBe(english)

  act(() => stashSessionDraft('thai-draft', '', []))
  expect(thaiTab.textContent).toBe(resolveTranslations('th').sidebar.nav['new-session'])
  expect(englishTab.textContent).toBe(english)

  await act(() => {
    fireEvent.click(screen.getByRole('button', { name: 'English' }))
  })
  expect(thaiTab.textContent).toBe(resolveTranslations('en').sidebar.nav['new-session'])
  expect(englishTab.textContent).toBe(english)
})
