'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'motion/react'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const cursorX = useSpring(0, { stiffness: 500, damping: 40, mass: 0.5 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    if (mq.matches) return

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor="hover"]'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [cursorX, cursorY, visible])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-difference md:block"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 2.5 : 1,
      }}
      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="-ml-2 -mt-2 h-4 w-4 rounded-full bg-white" />
    </motion.div>
  )
}
