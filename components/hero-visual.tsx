'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated particle field that resolves into the GIEO ring symbol.
 * Gold-accented particles on dark background.
 */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type P = { bx: number; by: number; x: number; y: number; vx: number; vy: number; r: number; lit: boolean }
    let particles: P[] = []

    // Gold palette
    const accent = 'rgba(197, 160, 89, '
    const dim = 'rgba(166, 160, 154, '

    function build() {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = []
      const cx = w * 0.5
      const cy = h * 0.42
      const radius = Math.min(w, h) * 0.3

      // Ring of the GIEO "O" — reduced density for cleaner Heco feel
      const ringCount = 180
      for (let i = 0; i < ringCount; i++) {
        const a = (i / ringCount) * Math.PI * 2
        const jitter = (Math.random() - 0.5) * radius * 0.22
        const rr = radius + jitter
        const x = cx + Math.cos(a) * rr
        const y = cy + Math.sin(a) * rr
        particles.push({ bx: x, by: y, x, y, vx: 0, vy: 0, r: Math.random() * 2.0 + 1.0, lit: true })
      }

      // Bar of the GIEO mark
      const barW = radius * 1.05
      const barCount = 50
      for (let i = 0; i < barCount; i++) {
        const x = cx - barW / 2 + Math.random() * barW
        const y = cy + radius * 1.55 + (Math.random() - 0.5) * radius * 0.14
        particles.push({ bx: x, by: y, x, y, vx: 0, vy: 0, r: Math.random() * 2.0 + 1.0, lit: true })
      }

      // Ambient scatter
      for (let i = 0; i < 120; i++) {
        const x = Math.random() * w
        const y = Math.random() * h
        particles.push({ bx: x, by: y, x, y, vx: 0, vy: 0, r: Math.random() * 1.4 + 0.5, lit: false })
      }
    }

    let mx = -9999
    let my = -9999
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
    }
    const onLeave = () => {
      mx = -9999
      my = -9999
    }

    let t = 0
    function frame() {
      t += 0.008
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        // Gentle drift
        const driftX = Math.sin(t + p.by * 0.01) * 1.2
        const driftY = Math.cos(t + p.bx * 0.01) * 1.2
        const targetX = p.bx + driftX
        const targetY = p.by + driftY

        // Mouse repulsion
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.hypot(dx, dy)
        if (dist < 100) {
          const force = (100 - dist) / 100
          p.vx += (dx / (dist || 1)) * force * 1.8
          p.vy += (dy / (dist || 1)) * force * 1.8
        }

        p.vx += (targetX - p.x) * 0.04
        p.vy += (targetY - p.y) * 0.04
        p.vx *= 0.82
        p.vy *= 0.82
        p.x += p.vx
        p.y += p.vy

        const alpha = p.lit ? 0.7 + Math.sin(t * 1.8 + p.bx) * 0.2 : 0.18
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = (p.lit ? accent : dim) + Math.max(0.04, alpha) + ')'
        ctx.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    build()
    frame()
    const onResize = () => build()
    window.addEventListener('resize', onResize)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}
