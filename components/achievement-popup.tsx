"use client"

import { useEffect, useState } from "react"
import { Trophy, Star, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

interface AchievementPopupProps {
  show: boolean
  title: string
  description: string
  type?: "xp" | "level" | "badge"
  onClose: () => void
}

export function AchievementPopup({ show, title, description, type = "xp", onClose }: AchievementPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  const icons = {
    xp: <Zap className="w-8 h-8 text-primary" />,
    level: <Star className="w-8 h-8 text-accent" />,
    badge: <Trophy className="w-8 h-8 text-secondary" />,
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <Card
        className={`
          pointer-events-auto border-2 border-border p-6 max-w-sm mx-4
          transition-all duration-300 pixel-card
          ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}
        `}
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 animate-bounce">{icons[type]}</div>
          <div>
            <h3 className="font-bold pixel-text text-lg mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
