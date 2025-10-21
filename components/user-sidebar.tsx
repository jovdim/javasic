"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, Award, BookOpen, HelpCircle } from "lucide-react";
import { useProgress } from "@/hooks/use-progress";

export function UserSidebar() {
  const { level, xp, completedExercises, badges } = useProgress();

  const totalExercises = 28;
  const completionPercentage = Math.round(
    (completedExercises.length / totalExercises) * 100
  );

  return (
    <div className="space-y-6 sticky top-6">
      {/* User Profile Card */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-2xl font-bold">
            {level}
          </div>
          <div>
            <h3 className="font-bold text-lg">Your Name</h3>
            <p className="text-sm text-muted-foreground">Level {level}</p>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent">
          View Profile
        </Button>
      </Card>

      {/* Course Progress */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Course Progress</h3>
          <span className="text-sm text-muted-foreground">
            {completionPercentage}%
          </span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm">Exercises</span>
            </div>
            <span className="text-sm font-medium">
              {completedExercises.length}/{totalExercises}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm">Projects Completed</span>
            </div>
            <span className="text-sm font-medium">0/3</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">XP Earned</span>
            </div>
            <span className="text-sm font-medium">{xp}</span>
          </div>
        </div>
      </Card>

      {/* Course Badges */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Course Badges</h3>
          <span className="text-sm text-muted-foreground">
            {badges.length}/8
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Complete all exercises in each module to unlock a badge.
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[
            { id: "hello-world", icon: "👋", name: "Hello World" },
            { id: "variables", icon: "📦", name: "Variables" },
            { id: "control-flow", icon: "🔀", name: "Control Flow" },
            { id: "loops", icon: "🔁", name: "Loops" },
            { id: "arrays", icon: "📊", name: "Arrays" },
            { id: "methods", icon: "⚙️", name: "Methods" },
            { id: "classes", icon: "🏛️", name: "Classes" },
            { id: "master", icon: "🏆", name: "Master" },
          ].map((badge) => {
            const isUnlocked = badges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`aspect-square rounded-lg flex items-center justify-center text-2xl ${
                  isUnlocked
                    ? "bg-gradient-to-br from-accent to-primary"
                    : "bg-secondary opacity-40"
                }`}
                title={badge.name}
              >
                {badge.icon}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Cheat Sheets */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Cheat Sheets</h3>
          <span className="text-sm text-muted-foreground">0/4</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Unlock cheat sheets with your Java knowledge.
        </p>
        <Button variant="outline" className="w-full bg-transparent" disabled>
          <Award className="w-4 h-4 mr-2" />
          Unlock after Ch. 1
        </Button>
      </Card>

      {/* Need Help */}
      <Card className="p-6 bg-card border-border">
        <h3 className="font-bold text-lg mb-2">Need Help?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask questions in our community!
        </p>
        <Button variant="outline" className="w-full bg-transparent">
          <HelpCircle className="w-4 h-4 mr-2" />
          Go to Community
        </Button>
      </Card>
    </div>
  );
}
