import { DEFAULT_REASONING_EFFORT, REASONING_EFFORT_VALUES } from '@hermes/shared'
import { describe, expect, it } from 'vitest'

import { th } from '@/i18n/th'

import {
  isThinkingEnabled,
  reasoningEffortClamp,
  reasoningEffortLabel,
  resolveReasoningEffort
} from './reasoning-effort'

describe('reasoning-effort', () => {
  it('uses translated labels while retaining the gateway clamp and unknown-value contract', () => {
    const labels = { ...th.shell.modelOptions, none: th.common.off }

    expect(reasoningEffortLabel('medium', undefined, labels)).toBe('ปานกลาง')
    expect(reasoningEffortLabel('ultra', 'max', labels)).toBe(`${labels.ultra}→${labels.max}`)
    expect(reasoningEffortLabel('none', undefined, labels)).toBe('ปิด')
    expect(reasoningEffortLabel('Custom', undefined, labels)).toBe('Custom')
    expect(reasoningEffortLabel('medium')).toBe('Med')
  })

  it('labels every level it claims to support', () => {
    for (const effort of REASONING_EFFORT_VALUES) {
      expect(reasoningEffortLabel(effort)).not.toBe('')
    }

    expect(reasoningEffortLabel('')).toBe('')
    // Unknown values pass through rather than silently reading as a real level.
    expect(reasoningEffortLabel('bogus')).toBe('bogus')
  })

  it('labels a route clamp from the gateway wire level only, never by inference', () => {
    expect(reasoningEffortLabel('ultra', 'max')).toBe('Ultra→Max')
    expect(reasoningEffortClamp('ultra', 'max')).toEqual({ effort: 'ultra', wire: 'max' })
    // Unknown ('' — not stamped yet / optimistic pick) or verbatim: plain label, no claim.
    expect(reasoningEffortLabel('ultra', '')).toBe('Ultra')
    expect(reasoningEffortLabel('ultra')).toBe('Ultra')
    expect(reasoningEffortLabel('high', 'high')).toBe('High')
    expect(reasoningEffortClamp('high', 'high')).toBeNull()
    expect(reasoningEffortClamp('none', '')).toBeNull()
  })

  it('treats empty as inherit and only `none` as off', () => {
    expect(isThinkingEnabled('none')).toBe(false)
    expect(isThinkingEnabled('high')).toBe(true)
    // Empty inherits the fallback, so an off fallback reads as off.
    expect(isThinkingEnabled('', 'none')).toBe(false)
    expect(isThinkingEnabled('', 'high')).toBe(true)
  })

  it('resolves a scale value: inherit, off, or clamp', () => {
    expect(resolveReasoningEffort('high')).toBe('high')
    // Empty inherits the profile default rather than snapping to medium.
    expect(resolveReasoningEffort('', 'ultra')).toBe('ultra')
    // Off selects nothing on the scale.
    expect(resolveReasoningEffort('none')).toBe('')
    expect(resolveReasoningEffort('bogus')).toBe(DEFAULT_REASONING_EFFORT)
  })
})
