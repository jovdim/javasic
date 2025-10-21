"use client"

import { useEffect, useState } from "react"

interface ConfettiEffectProps {
  trigger: boolean
}

export function ConfettiEffect({ trigger }: ConfettiEffectProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([])

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        color: ["#fbbf24", "#ec4899", "#8b5cf6", "#06b6d4", "#f97316"][Math.floor(Math.random() * 5)],
        delay: Math.random() * 0.3,
      }))
      setParticles(newParticles)

      setTimeout(() => setParticles([]), 2000)
    }
  }, [trigger])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-0 w-3 h-3 animate-confetti"
          style={{
            left: `${particle.x}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
