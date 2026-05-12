'use client'

import { useEffect, useRef, useCallback } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15

    if (cursorRef.current) {
      cursorRef.current.style.left = `${posRef.current.x}px`
      cursorRef.current.style.top = `${posRef.current.y}px`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)
    cursorRef.current = cursor

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('expanded'))
        el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'))
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      cursor.parentNode?.removeChild(cursor)
    }
  }, [animate])

  return null
}