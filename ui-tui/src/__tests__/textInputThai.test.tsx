import { EventEmitter } from 'node:events'
import { PassThrough } from 'node:stream'

import { renderSync, stringWidth, wrapAnsi } from '@hermes/ink'
import React, { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { canFastAppendShape, canFastBackspaceShape, TextInput } from '../components/textInput.js'
import { cursorLayout, offsetFromPosition } from '../lib/inputMetrics.js'

class ThaiInput extends EventEmitter {
  chunks: string[] = []
  isTTY = true
  readableLength = 0
  read() {
    const next = this.chunks.shift() ?? null
    this.readableLength = this.chunks.length

    return next
  }
  ref = vi.fn()
  send(text: string) {
    this.chunks.push(text)
    this.readableLength = this.chunks.length
    this.emit('readable')
  }
  setEncoding = vi.fn()
  setRawMode = vi.fn()
  unref = vi.fn()
}

describe('Thai terminal input', () => {
  it('counts stacked Thai marks and spacing vowels in terminal cells', () => {
    expect(stringWidth('น้ำ')).toBe(2)
    expect(stringWidth('ตั้งค่า')).toBe(4)
    expect(stringWidth('น้ำ🙂')).toBe(4)
    expect(stringWidth('ນ້ຳ🙂')).toBe(4)
    expect(stringWidth('ำ🙂')).toBe(3)
    expect(canFastAppendShape('น', 1, '้', 80, 1)).toBe(false)
    expect(canFastBackspaceShape('น้ำ', 3, 80)).toBe(false)
  })

  it('keeps Thai cursor positions aligned with wrapped terminal text and click targets', () => {
    const text = 'สวัสดี ตั้งค่า น้ำ🙂 ภาษาไทย'
    const segmenter = new Intl.Segmenter('th', { granularity: 'grapheme' })

    for (const columns of [6, 12, 30]) {
      for (const { index, segment } of segmenter.segment(text)) {
        const prefix = text.slice(0, index + segment.length)
        const lines = wrapAnsi(prefix, columns, { hard: true, trim: false }).split('\n')

        expect(cursorLayout(prefix, prefix.length, columns)).toEqual({
          column: stringWidth(lines.at(-1)!),
          line: lines.length - 1
        })
      }
    }

    expect(offsetFromPosition('กิข', 0, 0, 20)).toBe(0)
    expect(offsetFromPosition('กิข', 0, 1, 20)).toBe(2)
    expect(offsetFromPosition('กิข', 0, 2, 20)).toBe(3)
  })

  it('types Thai marks, edits whole graphemes, submits exact UTF-8 text and clears the draft', async () => {
    const stdin = new ThaiInput()
    const stdout = Object.assign(new PassThrough(), { columns: 40, isTTY: false, rows: 24 })
    const stderr = Object.assign(new PassThrough(), { columns: 40, isTTY: false, rows: 24 })
    const submits: string[] = []
    let draft = ''

    function Harness() {
      const [value, setValue] = useState('')
      draft = value

      return (
        <TextInput
          columns={40}
          onChange={setValue}
          onSubmit={text => {
            submits.push(text)
            setValue('')
          }}
          value={value}
        />
      )
    }

    const instance = renderSync(React.createElement(Harness), {
      patchConsole: false,
      stderr: stderr as NodeJS.WriteStream,
      stdin: stdin as unknown as NodeJS.ReadStream,
      stdout: stdout as NodeJS.WriteStream
    })

    try {
      await vi.waitFor(() => expect(stdin.setRawMode).toHaveBeenCalled())
      let typed = ''

      for (const letter of 'กิข') {
        typed += letter
        stdin.send(letter)
        await vi.waitFor(() => expect(draft).toBe(typed))
      }

      expect(draft).toBe('กิข')
      stdin.send('\x1b[D\x7f')
      await vi.waitFor(() => expect(draft).toBe('ข'))
      stdin.send('สวัสดี')
      await vi.waitFor(() => expect(draft).toBe('สวัสดีข'))
      stdin.send('\r')
      await vi.waitFor(() => {
        expect(submits).toEqual(['สวัสดีข'])
        expect(draft).toBe('')
      })
      stdin.send('เริ่มใหม่')
      await vi.waitFor(() => expect(draft).toBe('เริ่มใหม่'))
    } finally {
      instance.unmount()
      instance.cleanup()
    }
  })
})
