'use client'

import { useEffect, useRef } from 'react'

/** Subtle character-rain backdrop in gold tones for the footer. */
export function MatrixBg() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const chars = '01<>{}[]/\\=+*ABCDEF#'
    const fontSize = 14
    let columns = 0
    let drops: number[] = []

    function setup() {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = Math.floor(w / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * -h)
    }

    let last = 0
    function frame(ts: number) {
      raf = requestAnimationFrame(frame)
      if (ts - last < 70) return
      last = ts
      ctx.fillStyle = 'rgba(10,10,10,0.35)'
      ctx.fillRect(0, 0, w, h)
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < columns; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i]
        ctx.fillStyle = 'rgba(197,160,89,0.10)'
        ctx.fillText(text, x, y)
        if (y > h && Math.random() > 0.975) drops[i] = 0
        drops[i] += fontSize
      }
    }

    setup()
    raf = requestAnimationFrame(frame)
    const onResize = () => setup()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-60" aria-hidden="true" />
}
