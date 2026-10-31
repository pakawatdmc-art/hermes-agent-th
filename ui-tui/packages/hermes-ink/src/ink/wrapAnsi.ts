import wrapAnsiNpm from 'wrap-ansi'

import { type WrapAnsiOptions, wrapGraphemes } from './wrapGraphemes.js'

const wrapAnsiBun = typeof Bun !== 'undefined' && typeof Bun.wrapAnsi === 'function' ? Bun.wrapAnsi : null

const wrapNative = wrapAnsiBun ?? wrapAnsiNpm

function wrapAnsi(input: string, columns: number, options?: WrapAnsiOptions): string {
  return /[\u0e00-\u0eff]/.test(input) ? wrapGraphemes(input, columns, options) : wrapNative(input, columns, options)
}

export { wrapAnsi }
