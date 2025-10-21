"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Lock, Star, Trophy, Zap } from "lucide-react"
import type { Lesson } from "@/lib/course-data"

interface LessonPreviewModalProps {
  lesson: Lesson | null
  isOpen: boolean
  onClose: () => void
  isLocked: boolean
}

export function LessonPreviewModal({ lesson, isOpen, onClose, isLocked }: LessonPreviewModalProps) {
  if (!lesson) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 border-4 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold pixel-text text-yellow-400 flex items-center gap-3">
            {isLocked && <Lock className="w-6 h-6" />}
            {lesson.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Lesson Info */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-yellow-400 border-3 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Star className="w-4 h-4 text-black" />
              <span className="font-bold pixel-text text-black text-sm">{lesson.xp} XP</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-400 border-3 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-4 h-4 text-black" />
              <span className="font-bold pixel-text text-black text-sm">{lesson.questions?.length || 3} Questions</span>
            </div>
            <div className="flex items-center gap-2 bg-pink-400 border-3 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-4 h-4 text-black" />
              <span className="font-bold pixel-text text-black text-sm">5 Energy</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-black/30 border-3 border-yellow-400/50 p-4 rounded-lg">
            <h3 className="text-lg font-bold pixel-text text-yellow-400 mb-2">What You'll Learn:</h3>
            <p className="text-white/90 leading-relaxed">
              {lesson.description ||
                `Master ${lesson.title} concepts through interactive lessons and quizzes. Build your Java knowledge step by step!`}
            </p>
          </div>

          {/* Topics Preview */}
          <div className="bg-black/30 border-3 border-cyan-400/50 p-4 rounded-lg">
            <h3 className="text-lg font-bold pixel-text text-cyan-400 mb-3">Topics Covered:</h3>
            <ul className="space-y-2">
              {lesson.topics?.map((topic, index) => (
                <li key={index} className="flex items-start gap-2 text-white/90">
                  <span className="text-cyan-400 font-bold">▸</span>
                  <span>{topic}</span>
                </li>
              )) || (
                <>
                  <li className="flex items-start gap-2 text-white/90">
                    <span className="text-cyan-400 font-bold">▸</span>
                    <span>Core concepts and syntax</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/90">
                    <span className="text-cyan-400 font-bold">▸</span>
                    <span>Practical examples</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/90">
                    <span className="text-cyan-400 font-bold">▸</span>
                    <span>Common patterns and best practices</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Lock Message */}
          {isLocked && (
            <div className="bg-orange-500/20 border-3 border-orange-400 p-4 rounded-lg">
              <p className="text-orange-200 font-bold pixel-text text-center">
                🔒 Complete previous lessons to unlock this content!
              </p>
            </div>
          )}

          {/* Action Button */}
          <Button
            onClick={onClose}
            disabled={isLocked}
            className="w-full bg-yellow-400 hover:bg-yellow-500 border-4 border-black text-black font-bold py-6 text-lg pixel-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLocked ? "🔒 LOCKED" : "START LESSON →"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
