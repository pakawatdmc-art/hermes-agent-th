import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { act, cleanup, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { afterEach, expect, it } from 'vitest'

import { I18nProvider, setRuntimeI18nLocale, useI18n } from '@/i18n'
import { modelOptionsQueryKey } from '@/lib/model-options'

import { useChatBarState } from './use-chat-bar-state'

afterEach(() => {
  cleanup()
  setRuntimeI18nLocale('en')
})

it('updates the attachment label on a language switch while preserving the model and context choices', async () => {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  const suggestions = [{ display: 'ไฟล์งาน', text: '@file:work.py', meta: 'Python' }]

  client.setQueryData(modelOptionsQueryKey('work', 'session-1'), {
    providers: [{ slug: 'openai', name: 'OpenAI', models: ['gpt-6'], capabilities: { 'gpt-6': { reasoning: true } } }]
  })

  const { result, unmount } = renderHook(
    () => ({
      changeLanguage: useI18n().setLocale,
      state: useChatBarState({
        activeGatewayProfile: 'work',
        activeSessionId: 'session-1',
        contextSuggestions: suggestions,
        currentModel: 'gpt-6',
        currentProvider: 'openai',
        gateway: null,
        gatewayOpen: false
      })
    }),
    {
      wrapper: ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={client}>
          <I18nProvider configClient={null} initialLocale="en">
            {children}
          </I18nProvider>
        </QueryClientProvider>
      )
    }
  )

  const model = result.current.state.model
  expect(result.current.state.tools.label).toBe('Attach')
  expect(model.supportsReasoning).toBe(true)
  expect(model.quickModels).toContainEqual(expect.objectContaining({ model: 'gpt-6', provider: 'openai' }))

  await act(() => result.current.changeLanguage('th'))
  expect(result.current.state.tools.label).toBe('แนบ')
  expect(result.current.state.tools.suggestions).toBe(suggestions)
  expect(result.current.state.model).toEqual(model)
  expect(result.current.state.model.quickModels).toBe(model.quickModels)

  await act(() => result.current.changeLanguage('en'))
  expect(result.current.state.tools.label).toBe('Attach')
  expect(result.current.state.model).toEqual(model)
  unmount()
  client.clear()
})
