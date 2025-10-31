"use client"

import React, { HTMLAttributes, useRef } from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
  maxTilt?: number
  scale?: number
}

export default function TiltCard({ maxTilt = 12, scale = 1.04, className = "", children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateY = ((x - midX) / midX) * maxTilt
    const rotateX = -((y - midY) / midY) * maxTilt
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={ref}
      className={`tilt-card tilt-glow transition-transform duration-200 ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </div>
  )
}
