import { type StyledChar, styledCharsFromTokens, styledCharsToString, tokenize } from '@alcalzone/ansi-tokenize'

import { getGraphemeSegmenter } from '../utils/intl.js'

import { stringWidth } from './stringWidth.js'

export interface WrapAnsiOptions {
  hard?: boolean
  wordWrap?: boolean
  trim?: boolean
}

interface Glyph {
  chars: StyledChar[]
  text: string
  width: number
}

interface Row {
  glyphs: Glyph[]
  width: number
}

function glyphsFromAnsi(input: string): Glyph[] {
  const chars = styledCharsFromTokens(tokenize(input))
  const text = chars.map(char => char.value).join('')
  const glyphs: Glyph[] = []
  let charIndex = 0
  let offset = 0

  for (const { segment, index } of getGraphemeSegmenter().segment(text)) {
    const start = charIndex

    while (offset < index + segment.length) {
      offset += chars[charIndex++]!.value.length
    }

    glyphs.push({ chars: chars.slice(start, charIndex), text: segment, width: stringWidth(segment) })
  }

  return glyphs
}

const emptyRow = (): Row => ({ glyphs: [], width: 0 })

function appendGlyph(row: Row, glyph: Glyph): void {
  row.glyphs.push(glyph)
  row.width += glyph.width
}

function appendHardWrapped(rows: Row[], glyphs: Glyph[], columns: number): void {
  for (const glyph of glyphs) {
    if (rows.at(-1)!.width > 0 && rows.at(-1)!.width + glyph.width > columns) {
      rows.push(emptyRow())
    }

    appendGlyph(rows.at(-1)!, glyph)
  }
}

function appendWord(rows: Row[], word: Glyph[], columns: number, options: WrapAnsiOptions): void {
  const width = word.reduce((sum, glyph) => sum + glyph.width, 0)
  const row = rows.at(-1)!

  if (options.hard && width > columns) {
    const remaining = columns - row.width
    const breaksHere = 1 + Math.floor((width - remaining - 1) / columns)
    const breaksNext = Math.floor((width - 1) / columns)

    if (breaksNext < breaksHere) {
      rows.push(emptyRow())
    }

    appendHardWrapped(rows, word, columns)

    return
  }

  if (row.width + width > columns && row.width > 0 && width > 0) {
    if (options.wordWrap === false && row.width < columns) {
      appendHardWrapped(rows, word, columns)

      return
    }

    rows.push(emptyRow())
  }

  if (options.wordWrap === false && width > columns) {
    appendHardWrapped(rows, word, columns)

    return
  }

  for (const glyph of word) {
    appendGlyph(rows.at(-1)!, glyph)
  }
}

function wrapParagraph(glyphs: Glyph[], columns: number, options: WrapAnsiOptions): Row[] {
  const rows = [emptyRow()]
  let word: Glyph[] = []

  for (const glyph of glyphs) {
    if (glyph.text !== ' ') {
      word.push(glyph)

      continue
    }

    appendWord(rows, word, columns, options)
    word = []

    if (rows.at(-1)!.width >= columns && (options.wordWrap === false || options.trim === false)) {
      rows.push(emptyRow())
    }

    if (rows.at(-1)!.width > 0 || options.trim === false) {
      appendGlyph(rows.at(-1)!, glyph)
    }
  }

  appendWord(rows, word, columns, options)

  if (options.trim !== false) {
    for (const row of rows) {
      while (row.glyphs.at(-1)?.text === ' ') {
        row.glyphs.pop()
      }
    }
  }

  return rows
}

/** wrap-ansi's codepoint hard-wrap splits Thai combining marks and its width
 *  calculation drops SARA AM. Keep ANSI styles on their original characters,
 *  but choose line breaks only between complete graphemes using Ink's widths. */
export function wrapGraphemes(input: string, columns: number, options: WrapAnsiOptions = {}): string {
  const paragraphs: Glyph[][] = [[]]

  for (const glyph of glyphsFromAnsi(input.replaceAll('\r\n', '\n'))) {
    if (glyph.text === '\n') {
      paragraphs.push([])
    } else {
      paragraphs.at(-1)!.push(glyph)
    }
  }

  return paragraphs
    .flatMap(paragraph => wrapParagraph(paragraph, Math.max(1, columns), options))
    .map(row => styledCharsToString(row.glyphs.flatMap(glyph => glyph.chars)))
    .join('\n')
}
