import stripAnsi from 'strip-ansi'
import { describe, expect, it } from 'vitest'

import { stringWidth } from './stringWidth.js'
import { wrapAnsi } from './wrapAnsi.js'

describe('Thai and Lao ANSI wrapping', () => {
  it('wraps spacing vowels and emoji without splitting graphemes or overflowing a row', () => {
    for (const text of ['น้ำ🙂', 'ນ້ຳ🙂']) {
      for (const columns of [2, 3]) {
        const wrapped = wrapAnsi(text, columns, { hard: true, trim: false })

        expect(wrapped).toBe(`${text.slice(0, -2)}\n🙂`)
        expect(wrapped.replaceAll('\n', '')).toBe(text)
        expect(wrapped.split('\n').every(line => stringWidth(line) <= columns)).toBe(true)
      }
    }
  })

  it('preserves color and hyperlink styles across Thai wraps', () => {
    const openLink = '\x1b]8;;https://example.com\x07'
    const closeLink = '\x1b]8;;\x07'
    const input = `${openLink}\x1b[31mน้ำ🙂\x1b[39m${closeLink}`
    const lines = wrapAnsi(input, 3, { hard: true, trim: false }).split('\n')

    expect(lines.map(stripAnsi)).toEqual(['น้ำ', '🙂'])

    for (const line of lines) {
      expect(line).toContain(openLink)
      expect(line).toContain(closeLink)
      expect(line).toContain('\x1b[31m')
      expect(line).toContain('\x1b[39m')
    }
  })

  it('preserves existing word, whitespace and hard-newline wrapping', () => {
    expect(wrapAnsi('hello world', 8, { hard: true, trim: false })).toBe('hello \nworld')
    expect(wrapAnsi('ภาษา ไทย', 6, { hard: true, trim: false })).toBe('ภาษา \nไทย')
    expect(wrapAnsi(' น้ำ  ไทย\nน้ำ', 4, { hard: true, trim: false })).toBe(' น้ำ \n ไทย\nน้ำ')
    expect(wrapAnsi('น้ำ ไทย', 3, { hard: false })).toBe('น้ำ\nไทย')
  })
})
