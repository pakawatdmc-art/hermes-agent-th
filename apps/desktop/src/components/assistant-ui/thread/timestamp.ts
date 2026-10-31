import { fmtClock, fmtDayTime } from '@/lib/time'

const timelineClocks = new Map<string | undefined, Intl.DateTimeFormat>()

function timelineClock(locale?: string): Intl.DateTimeFormat {
  let formatter = timelineClocks.get(locale)

  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, {
      fractionalSecondDigits: 3,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      ...(locale === 'th' ? { hourCycle: 'h23' } : {})
    })
    timelineClocks.set(locale, formatter)
  }

  return formatter
}

const timelineDate = (seconds: number | undefined): Date | null => {
  if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds <= 0) {
    return null
  }

  const date = new Date(seconds * 1000)

  return Number.isNaN(date.getTime()) ? null : date
}

/** Millisecond-precise local clock for transcript activity boundaries. */
export function formatTimelineTimestamp(seconds: number | undefined, locale?: string): string {
  const date = timelineDate(seconds)

  return date ? timelineClock(locale).format(date) : ''
}

export function formatTimelineRange(start: number | undefined, end: number | undefined, locale?: string): string {
  const from = formatTimelineTimestamp(start, locale)

  if (!from) {
    return ''
  }

  const to = formatTimelineTimestamp(end, locale)

  return to ? `${from} → ${to}` : from
}

function startOfDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
}

export function formatMessageTimestamp(
  value: Date | string | number | undefined,
  labels: { today: (time: string) => string; yesterday: (time: string) => string },
  locale?: string
): string {
  if (!value) {
    return ''
  }

  const date = value instanceof Date ? value : new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  const dayDelta = Math.round((startOfDay(new Date()) - startOfDay(date)) / 86_400_000)

  if (dayDelta === 0) {
    return labels.today(fmtClock.format(date, locale))
  }

  if (dayDelta === 1) {
    return labels.yesterday(fmtClock.format(date, locale))
  }

  return fmtDayTime.format(date, locale)
}
