"use client"

import React, { useEffect, useRef } from "react"

export default function EffectsOverlay() {
  const barRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (scrolled / height) * 100 : 0
      if (barRef.current) barRef.current.style.width = `${progress}%`
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      const { clientX, clientY } = e
      cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("mousemove", onMouseMove)
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={barRef} className="scroll-progress" />
      <div ref={cursorRef} className="cursor-glow" />
    </>
  )
}
