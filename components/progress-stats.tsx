"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Target,
  Award,
  BookOpen,
  Flame,
  TrendingUp,
  Trophy,
  Crown,
  Gift,
  Star,
  Box,
  LucideCrown,
  Settings,
  Settings2,
  Repeat,
  Infinity,
  ChartNetwork,
  ChartGantt,
  ChartColumnDecreasing,
} from "lucide-react";
import { useProgress } from "@/hooks/use-progress";
import { useSound } from "@/hooks/use-sound";
import { courseData } from "@/lib/course-data";
import { CheatSheetModal } from "@/components/cheat-sheet-modal";
import Link from "next/link";

export function ProgressStats() {
  const {
    completedLessons,
    xp,
    level,
    badges,
    streak,
    energy,
    energyRegenTime,
  } = useProgress();
  const { playClick } = useSound();
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  const totalLessons = courseData.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );
  const progressPercentage = (completedLessons.length / totalLessons) * 100;
  const xpForNextLevel = level * 100;
  const xpProgress = ((xp % 100) / 100) * 100;
  const allLessonsCompleted = completedLessons.length === totalLessons;

  const badgeData = [
    {
      id: "module-1",
      name: "Hello World Master",
      description: "Complete all Hello World lessons",
      benefit: "Unlocks confidence!",
      icon: <Star className="h-12 w-12 text-white" />,
      color: "from-yellow-400 to-yellow-600",
      unlocked: badges.includes("module-1"),
    },
    {
      id: "module-2",
      name: "Variable Expert",
      description: "Master all variable types",
      benefit: "IDOL LOPET!!!",
      icon: <Box className="h-12 w-12 text-white " />,
      color: "from-blue-400 to-blue-600",
      unlocked: badges.includes("module-2"),
    },
    {
      id: "module-3",
      name: "Control Flow Pro",
      description: "Complete control flow module",
      benefit: "Unlocks advanced patterns",
      icon: <Repeat className="h-12 w-12 text-white " />,
      color: "from-purple-400 to-purple-600",
      unlocked: badges.includes("module-3"),
    },
    {
      id: "module-4",
      name: "Loop Legend",
      description: "Master all loop types",
      benefit: "+15 XP bonus",
      icon: <Infinity className="h-12 w-12 text-white" />,
      color: "from-green-400 to-green-600",
      unlocked: badges.includes("module-4"),
    },
    {
      id: "module-5",
      name: "Array Architect",
      description: "Complete array module",
      benefit: "Unlocks data structures",
      icon: <ChartColumnDecreasing className="h-12 w-12 text-white" />,
      color: "from-orange-400 to-orange-600",
      unlocked: badges.includes("module-5"),
    },
    {
      id: "module-6",
      name: "Method Master",
      description: "Master method creation",
      benefit: "+20 XP bonus",
      icon: <Settings className="h-12 w-12 text-white " />,
      color: "from-cyan-400 to-cyan-600",
      unlocked: badges.includes("module-6"),
    },
    {
      id: "module-7",
      name: "OOP Champion",
      description: "Complete OOP module",
      benefit: "Unlocks advanced Java",
      icon: <Settings2 className="h-12 w-12 text-white " />,
      color: "from-pink-400 to-pink-600",
      unlocked: badges.includes("module-7"),
    },
    {
      id: "master",
      name: "Java Master",
      description: "Complete ALL lessons!",
      benefit: "Ultimate bragging rights!",
      icon: <LucideCrown className="h-12 w-12 text-white" />,
      color: "from-yellow-300 via-yellow-400 to-orange-500",
      unlocked: badges.includes("master"),
    },
  ];

  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const handleCheatSheetClick = () => {
    playClick();
    if (allLessonsCompleted) {
      setIsCheatSheetOpen(true);
    }
  };

  const streakBonus = streak >= 7 ? "2x XP" : streak >= 3 ? "1.5x XP" : "1x XP";

  return (
    <>
      <div className="space-y-4 md:space-y-6 sticky top-4">
        <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-500 to-violet-500 border-4 border-violet-400 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 md:w-6 md:h-6 " />
              <h3 className="text-lg md:text-xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                ENERGY
              </h3>
            </div>
            <div className="text-right bg-black/20 px-3 py-1 rounded border-2 border-black">
              <p className="text-base md:text-lg font-bold text-white">
                {energy}/10
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-black/30 rounded-full overflow-hidden border-2 border-black">
              <div
                className={`h-full transition-all duration-500 ease-out ${
                  energy >= 7
                    ? "bg-cyan-500"
                    : energy > 4
                    ? "bg-yellow-300"
                    : "bg-red-300 animate-pulse"
                }`}
                style={{ width: `${energy * 10}%` }}
              />
            </div>
            <p className="flex justify-start items-center text-xs text-white/80 font-bold  px-2 py-1 rounded ">
              <Zap className="w-4 h-4 fill-yellow-500" />
              {energy === 10
                ? "FULL ENERGY!"
                : `+1 Energy in ${energyRegenTime}s`}
            </p>
          </div>
        </Card>

        {/* Level and XP Card */}
        <Card className="p-4 md:p-6 bg-gradient-to-br from-yellow-500 to-orange-500 border-4 border-yellow-400 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <h3 className="text-lg md:text-xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                {allLessonsCompleted ? "MAX LEVEL!" : `LEVEL ${level}`}
              </h3>
            </div>
            <div className="text-right bg-black/20 px-3 py-1 rounded border-2 border-black">
              <p className="text-xs text-white/70 font-bold">XP</p>
              <p className="text-base md:text-lg font-bold text-white">{xp}</p>
            </div>
          </div>
          <div className="space-y-2">
            {!allLessonsCompleted ? (
              <>
                <div className="flex justify-between text-xs text-white/80 font-bold">
                  <span>Next Level</span>
                  <span>
                    {xp % 100}/{xpForNextLevel}
                  </span>
                </div>
                <div className="h-4 bg-black/30 rounded-full overflow-hidden border-2 border-black">
                  <div
                    className="h-full bg-white transition-all duration-500 ease-out"
                    style={{ width: `${xpProgress}%` }}
                  />
                </div>
                <p className="text-2xl text-white font-bold bg-black/20 px-2 py-1 rounded text-center pixel-text">
                  {level >= 4
                    ? "GURU"
                    : level >= 3
                    ? "MASTER"
                    : level >= 2
                    ? "ROOKIE"
                    : "NOOB"}
                </p>
              </>
            ) : (
              <div className="space-y-2">
                <div className="h-4 bg-black/30 rounded-full overflow-hidden border-2 border-black">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-pulse"
                    style={{ width: "100%" }}
                  />
                </div>
                <p className="text-xs text-white font-bold bg-gradient-to-r from-yellow-300 to-orange-400 px-2 py-1 rounded border-2 border-black text-center animate-pulse flex justify-center items-center gap-x-2">
                  <Crown className="w-5 h-5 " /> GURU LEVEL ACHIEVED!
                </p>
                <p className="text-xs text-white/80 font-bold text-center">
                  You're ready to dive deeper into advanced Java!
                </p>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4 md:p-6 bg-gradient-to-br from-orange-500 to-red-500 border-4 border-orange-400 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <h3 className="text-lg md:text-xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                STREAK
              </h3>
            </div>
            <div className="text-right bg-black/20 px-3 py-1 rounded border-2 border-black">
              <p className="text-base md:text-lg font-bold text-white">
                {streak} DAYS
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-white/80 font-bold bg-black/20 px-2 py-1 rounded border-2 border-black flex justify-start items-center gap-x-2">
              <Gift className="h-5 w-5" /> Current Bonus: {streakBonus}
            </p>
            <p className="text-xs text-white/70 font-bold">
              {streak >= 7
                ? "ON FIRE! Keep it up!"
                : streak >= 3
                ? "Great streak!"
                : " Start your streak today!"}
            </p>
          </div>
        </Card>

        {/* Course Progress Card */}
        <Card className="p-4 md:p-6 bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-cyan-400 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 md:w-6 md:h-6 text-black" />
            <h3 className="text-lg md:text-xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              PROGRESS
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80 font-bold">
                Lessons Done
              </span>
              <span className="text-base md:text-lg font-bold text-white bg-black/20 px-3 py-1 rounded border-2 border-black">
                {completedLessons.length}/{totalLessons}
              </span>
            </div>
            <div className="h-4 bg-black/30 rounded-full overflow-hidden border-2 border-black">
              <div
                className="h-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-xs text-center text-white/80 font-bold bg-black/20 py-1 rounded border-2 border-black">
              {Math.round(progressPercentage)}% COMPLETE
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-purple-400 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-black" />
            <h3 className="text-lg md:text-xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              BADGES
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-3">
            {badgeData.map((badge) => (
              <div
                key={badge.id}
                className={`aspect-square rounded border-4 flex flex-col items-center justify-center text-2xl transition-all relative ${
                  badge.unlocked
                    ? `bg-gradient-to-br ${badge.color} border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 cursor-pointer`
                    : "bg-black/60 border-black/80 grayscale opacity-30"
                }`}
                title={badge.name}
                onMouseEnter={() => setHoveredBadge(badge.id)}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                <span className="text-2xl md:text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                  {badge.icon}
                </span>
                {hoveredBadge === badge.id && badge.unlocked && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black border-2 border-white p-2 rounded text-xs text-white whitespace-nowrap z-10 pixel-text animate-in fade-in duration-200">
                    <p className="font-bold">{badge.name}</p>
                    <p className="text-yellow-400">{badge.benefit}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-white/80 font-bold bg-black/20 py-1 rounded border-2 border-black">
            {badges.length}/{badgeData.length} UNLOCKED
          </p>
        </Card>

        {/* Cheat Sheet Card */}
        <Card className="p-4 md:p-6 bg-gradient-to-br from-green-500 to-emerald-500 border-4 border-green-400 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-black" />
            <h3 className="text-base md:text-lg font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              CHEAT SHEET
            </h3>
          </div>
          <p className="text-xs md:text-sm text-white/80 mb-3 font-bold">
            {allLessonsCompleted
              ? "Unlocked! Quick Java reference"
              : "Complete all lessons to unlock!"}
          </p>
          <Button
            onClick={handleCheatSheetClick}
            disabled={!allLessonsCompleted}
            className={`w-full  text-sm font-bold click-animation-3d ${
              allLessonsCompleted
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-black/40 text-white/60 cursor-not-allowed"
            }`}
          >
            {allLessonsCompleted ? "OPEN CHEAT SHEET" : "LOCKED"}
          </Button>
        </Card>

        {/* Final Test Card */}
        <Card
          className={`p-4 md:p-6 border-4 pixel-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
            allLessonsCompleted
              ? "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 border-yellow-300 animate-pulse"
              : "bg-gradient-to-br from-gray-600 to-gray-700 border-gray-500"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Trophy
              className={`w-6 h-6 md:w-8 md:h-8 text-black ${
                allLessonsCompleted ? "animate-bounce" : ""
              }`}
            />
            <h3 className="text-lg md:text-xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              FINAL TEST
            </h3>
          </div>
          <p className="text-xs md:text-sm text-white/90 mb-3 font-bold">
            {allLessonsCompleted
              ? " Ready to prove your mastery? Take the final comprehensive test and earn your certificate!"
              : " Complete all lessons to unlock the final test and earn your certificate!"}
          </p>
          {allLessonsCompleted ? (
            <Link href="/final-test">
              <Button
                onClick={playClick}
                className="w-full  text-sm font-bold click-animation-3d bg-white hover:bg-gray-200"
              >
                START FINAL TEST
              </Button>
            </Link>
          ) : (
            <Button
              disabled
              className="w-full text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black/40 text-white/60 cursor-not-allowed"
            >
              LOCKED
            </Button>
          )}
          {!allLessonsCompleted && (
            <p className="text-xs text-center text-white/70 mt-2 font-bold">
              {completedLessons.length}/{totalLessons} lessons completed
            </p>
          )}
        </Card>
      </div>

      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => {
          setIsCheatSheetOpen(false);
          playClick();
        }}
      />
    </>
  );
}
