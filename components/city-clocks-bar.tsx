'use client'

import { useEffect, useState } from 'react'

const cities = [
  { name: 'Denver, CO', timezone: 'America/Denver', abbr: 'MST' },
  { name: 'Geneva, CH', timezone: 'Europe/Zurich', abbr: 'CET' },
  { name: 'Abu Dhabi, UAE', timezone: 'Asia/Dubai', abbr: 'GST' },
]

function Clock({ name, timezone, abbr }: (typeof cities)[0]) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date()),
      )
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [timezone])

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.75" />
          <line x1="6" y1="6" x2="6" y2="3" stroke="currentColor" strokeWidth="0.75" />
          <line x1="6" y1="6" x2="8.5" y2="6" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>
      <div>
        <p className="label-caps text-muted-foreground">{name}</p>
        <p className="text-xs tabular-nums text-foreground/80">
          {time || '--:--'} {abbr}
        </p>
      </div>
    </div>
  )
}

export function CityClocksBar() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4">
      {cities.map((city) => (
        <Clock key={city.name} {...city} />
      ))}
    </div>
  )
}
