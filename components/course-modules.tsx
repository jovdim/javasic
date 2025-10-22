"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  Lock,
  Play,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";
import { useProgress } from "@/hooks/use-progress";
import { useSound } from "@/hooks/use-sound";
import Link from "next/link";
import { courseData } from "@/lib/course-data";

export function CourseModules() {
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [previewingModule, setPreviewingModule] = useState<number | null>(null);
  const { completedLessons } = useProgress();
  const { playClick } = useSound();

  const moduleColors = [
    {
      bg: "from-yellow-500 to-orange-500",
      border: "border-yellow-400",
      text: "text-yellow-400",
      progressBg: "bg-yellow-400",
    },
    {
      bg: "from-pink-500 to-purple-500",
      border: "border-pink-400",
      text: "text-pink-400",
      progressBg: "bg-pink-400",
    },
    {
      bg: "from-cyan-500 to-blue-500",
      border: "border-cyan-400",
      text: "text-cyan-400",
      progressBg: "bg-cyan-400",
    },
    {
      bg: "from-green-500 to-emerald-500",
      border: "border-green-400",
      text: "text-green-400",
      progressBg: "bg-green-400",
    },
    {
      bg: "from-orange-500 to-red-500",
      border: "border-orange-400",
      text: "text-orange-400",
      progressBg: "bg-orange-400",
    },
    {
      bg: "from-purple-500 to-indigo-500",
      border: "border-purple-400",
      text: "text-purple-400",
      progressBg: "bg-purple-400",
    },
    {
      bg: "from-rose-500 to-pink-500",
      border: "border-rose-400",
      text: "text-rose-400",
      progressBg: "bg-rose-400",
    },
  ];

  const toggleModule = (moduleId: number, isUnlocked: boolean) => {
    playClick();
    if (isUnlocked) {
      setExpandedModules((prev) =>
        prev.includes(moduleId)
          ? prev.filter((id) => id !== moduleId)
          : [...prev, moduleId]
      );
      setPreviewingModule(null);
    } else {
      setPreviewingModule(previewingModule === moduleId ? null : moduleId);
    }
  };

  const handleMouseEnter = (moduleId: number) => {
    setHoveredModule(moduleId);
  };

  const isLessonCompleted = (lessonId: number) => {
    return completedLessons.includes(lessonId);
  };

  const getModuleProgress = (module: (typeof courseData)[0]) => {
    const completed = module.lessons.filter((lesson) =>
      completedLessons.includes(lesson.id)
    ).length;
    const percentage = Math.round((completed / module.lessons.length) * 100);
    return { completed, total: module.lessons.length, percentage };
  };

  const isModuleUnlocked = (moduleIndex: number) => {
    if (moduleIndex === 0) return true;
    const previousModule = courseData[moduleIndex - 1];
    return previousModule.lessons.every((lesson) =>
      completedLessons.includes(lesson.id)
    );
  };
  return (
    <div className="space-y-3 md:space-y-4" id="course-curriculum">
      <h2 className="text-2xl md:text-3xl font-bold pixel-text mb-4 md:mb-6 text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        COURSE CURRICULUM
      </h2>
      {courseData.map((module, index) => {
        const Icon = module.icon;
        const isExpanded = expandedModules.includes(module.id);
        const isUnlocked = isModuleUnlocked(index);
        const isPreviewing = previewingModule === module.id;
        const progress = getModuleProgress(module);
        const isHovered = hoveredModule === module.id;
        const colors = moduleColors[index % moduleColors.length];

        return (
          <Card
            key={module.id}
            className={`bg-gradient-to-br ${colors.bg} border-4 ${
              colors.border
            } overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
              isHovered
                ? "scale-102 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : ""
            } ${!isUnlocked ? "opacity-80" : ""}`}
            onMouseEnter={() => handleMouseEnter(module.id)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            {/* Module header */}
            <button
              onClick={() => toggleModule(module.id, isUnlocked)}
              className="w-full p-4 md:p-6 flex items-center justify-between bg-black/20 hover:bg-black/30 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 bg-black border-3 border-white flex items-center justify-center text-2xl transition-transform ${
                    isHovered ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg md:text-2xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    {module.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90 hidden sm:block font-medium">
                    {module.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-24 h-3 bg-black/40 rounded-full overflow-hidden border-2 border-black">
                      <div
                        className={`h-full ${colors.progressBg} transition-all duration-500 ease-out`}
                        style={{ width: `${progress.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-white font-bold pixel-text drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                      {progress.percentage}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-sm md:text-base text-white font-bold pixel-text bg-black/40 px-2 py-1 border-2 border-white">
                  {progress.completed}/{progress.total}
                </span>
                {!isUnlocked ? (
                  <div className="flex items-center gap-1">
                    <Lock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    {isPreviewing ? (
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
                    ) : (
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
                    )}
                  </div>
                ) : isExpanded ? (
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
                )}
              </div>
            </button>

            {!isUnlocked && isPreviewing && (
              <div className="border-t-4 border-black/30 bg-black/40 p-4 animate-in slide-in-from-top duration-500 ease-out">
                <div className="flex items-center gap-2 text-sm text-white mb-3">
                  <Lock className="w-4 h-4" />
                  <span className="pixel-text font-bold">
                    COMPLETE PREVIOUS MODULE TO UNLOCK
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-white/80 pixel-text font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    LESSONS IN THIS MODULE:
                  </p>
                  {module.lessons.map((lesson, idx) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-2 text-xs text-white/90 bg-black/30 p-3 border-2 border-white/20 hover:border-white/40 hover:bg-black/50 transition-all rounded"
                    >
                      <span className="text-white/60 font-bold pixel-text bg-black/40 px-2 py-1 border border-white/30">
                        #{idx + 1}
                      </span>
                      <span className="flex-1 text-left font-medium">
                        {lesson.title}
                      </span>
                      <Star className="w-3 h-3 text-yellow-300" />
                      <span className="text-yellow-300 font-bold pixel-text">
                        +{lesson.xp} XP
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lesson list for unlocked modules */}
            {isExpanded && isUnlocked && (
              <div className="border-t-4 border-black/30 bg-black/20 animate-in slide-in-from-top duration-500 ease-out">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isCompleted = isLessonCompleted(lesson.id);
                  const isLessonUnlocked =
                    lessonIndex === 0 ||
                    isLessonCompleted(module.lessons[lessonIndex - 1].id);

                  return (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-3 md:p-4 transition-all border-b-2 border-black/20 last:border-b-0 ${
                        isLessonUnlocked
                          ? "hover:bg-black/30 hover:scale-101"
                          : "opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                        <span className="text-xs text-white/80 font-bold shrink-0 pixel-text bg-black/40 px-2 py-1 border-2 border-white/30">
                          #{lessonIndex + 1}
                        </span>
                        <span className="text-sm md:text-base font-bold text-white truncate">
                          {lesson.title}
                        </span>
                        <span className="text-xs bg-yellow-400 text-black px-2 py-1 font-bold pixel-text shrink-0 border-2 border-black">
                          +{lesson.xp} XP
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {isCompleted ? (
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-green-400/20 border-2 border-green-400 px-2 py-1 rounded">
                              <CheckCircle2 className="w-3 h-3 text-green-400" />
                              <span className="text-xs font-bold pixel-text text-green-400 hidden sm:inline">
                                DONE
                              </span>
                            </div>
                            <Link href={`/lesson/${module.id}/${lesson.slug}`}>
                              <Button
                                size="sm"
                                onClick={playClick}
                                className="bg-purple-400 hover:bg-purple-500 pixel-text click-animation-3d"
                              >
                                <Play className="w-3 h-3 md:w-4 md:h-4 md:mr-1" />
                                <span className="hidden sm:inline">RETAKE</span>
                              </Button>
                            </Link>
                          </div>
                        ) : !isLessonUnlocked ? (
                          <div className="flex items-center gap-1 text-white/70">
                            <Lock className="w-4 h-4" />
                            <span className="text-xs hidden sm:inline pixel-text">
                              LOCKED
                            </span>
                          </div>
                        ) : (
                          <Link href={`/lesson/${module.id}/${lesson.slug}`}>
                            <Button
                              size="sm"
                              onClick={playClick}
                              className="bg-yellow-400 hover:bg-yellow-500 click-animation-3d pxclick-animation-3d pixel-text "
                            >
                              <Play className="w-3 h-3 md:w-4 md:h-4 md:mr-1" />
                              <span className="hidden sm:inline">START</span>
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
