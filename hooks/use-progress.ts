"use client";

import { useState, useEffect } from "react";
import { courseData } from "@/lib/course-data";

interface ProgressData {
  completedLessons: number[];
  xp: number;
  level: number;
  badges: string[];
  streak: number;
  lastVisit: string;
  energy: number;
  lastEnergyUpdate: number;
}

export function useProgress() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState<ProgressData>({
    completedLessons: [],
    xp: 0,
    level: 1,
    badges: [],
    streak: 1,
    lastVisit: new Date().toDateString(),
    energy: 10,
    lastEnergyUpdate: Date.now(),
  });
  const [energyRegenTime, setEnergyRegenTime] = useState<number>(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const now = Date.now();
        const timePassed = now - prev.lastEnergyUpdate;
        const minutesPassed = Math.floor(timePassed / 60000);
        const secondsUntilNext = 60 - Math.floor((timePassed % 60000) / 1000);
        setEnergyRegenTime(secondsUntilNext);

        if (minutesPassed > 0 && prev.energy < 10) {
          const newEnergy = Math.min(10, prev.energy + minutesPassed);
          const newProgress = {
            ...prev,
            energy: newEnergy,
            lastEnergyUpdate: now,
          };
          localStorage.setItem("javasic-progress", JSON.stringify(newProgress));
          return newProgress;
        }
        return prev;
      });
    }, 1000); // Check every second for timer display

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const now = Date.now();
        const timePassed = now - prev.lastEnergyUpdate;
        const minutesPassed = Math.floor(timePassed / 60000);

        if (minutesPassed > 0 && prev.energy < 10) {
          const newEnergy = Math.min(10, prev.energy + minutesPassed);
          const newProgress = {
            ...prev,
            energy: newEnergy,
            lastEnergyUpdate: now,
          };
          localStorage.setItem("javasic-progress", JSON.stringify(newProgress));
          return newProgress;
        }
        return prev;
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("javasic-progress");
    if (saved) {
      const loadedProgress = JSON.parse(saved);
      const today = new Date().toDateString();
      const lastVisit = new Date(loadedProgress.lastVisit).toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      let newStreak = loadedProgress.streak || 0;
      if (lastVisit === yesterday) {
        newStreak += 1;
      } else if (lastVisit !== today) {
        newStreak = 1;
      }

      const energy = loadedProgress.energy ?? 10;
      const lastEnergyUpdate = loadedProgress.lastEnergyUpdate ?? Date.now();

      setProgress({
        ...loadedProgress,
        streak: newStreak,
        lastVisit: today,
        energy,
        lastEnergyUpdate,
      });
    }
    setIsLoaded(true);
  }, []);

  const saveProgress = (newProgress: ProgressData) => {
    setProgress(newProgress);
    localStorage.setItem("javasic-progress", JSON.stringify(newProgress));
  };

  const loseEnergy = (amount: number) => {
    const newEnergy = Math.max(0, progress.energy - amount);
    saveProgress({
      ...progress,
      energy: newEnergy,
      lastEnergyUpdate: Date.now(),
    });
  };

  const completeLesson = (lessonId: number) => {
    if (progress.completedLessons.includes(lessonId)) return;

    let lessonXP = 10;
    for (const module of courseData) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        lessonXP = lesson.xp || 10;
        break;
      }
    }

    const newXp = progress.xp + lessonXP;
    const newLevel = Math.floor(newXp / 100) + 1;
    const newCompleted = [...progress.completedLessons, lessonId];

    const newBadges = [...progress.badges];

    courseData.forEach((module) => {
      const moduleLessons = module.lessons.map((l) => l.id);
      const badgeId = `module-${module.id}`;
      if (
        moduleLessons.every((id) => newCompleted.includes(id)) &&
        !newBadges.includes(badgeId)
      ) {
        newBadges.push(badgeId);
      }
    });

    if (progress.streak >= 7 && !newBadges.includes("streak-7")) {
      newBadges.push("streak-7");
    }
    if (progress.streak >= 30 && !newBadges.includes("streak-30")) {
      newBadges.push("streak-30");
    }

    const totalLessons = courseData.reduce(
      (sum, module) => sum + module.lessons.length,
      0
    );
    if (newCompleted.length === totalLessons && !newBadges.includes("master")) {
      newBadges.push("master");
    }

    saveProgress({
      ...progress,
      completedLessons: newCompleted,
      xp: newXp,
      level: newLevel,
      badges: newBadges,
    });
  };

  const addXP = (amount: number) => {
    const newXp = progress.xp + amount;
    const newLevel = Math.floor(newXp / 100) + 1;
    saveProgress({
      ...progress,
      xp: newXp,
      level: newLevel,
    });
  };

  const resetProgress = () => {
    const emptyProgress = {
      completedLessons: [],
      xp: 0,
      level: 1,
      badges: [],
      streak: 0,
      lastVisit: new Date().toDateString(),
      energy: 10,
      lastEnergyUpdate: Date.now(),
    };
    saveProgress(emptyProgress);
  };

  return {
    ...progress,
    completeLesson,
    addXP,
    resetProgress,
    loseEnergy,
    energyRegenTime,
    isLoaded,
  };
}
