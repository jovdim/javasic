"use client";

import { Coffee, Flame, Zap } from "lucide-react";
import { useProgress } from "@/hooks/use-progress";
import { useSound } from "@/hooks/use-sound";

export function Navbar() {
  const { streak, energy } = useProgress();

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-border bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-yellow-400 border-4 border-black flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Coffee className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold pixel-text text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              JAVASIC
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Streak */}
            <div className="flex items-center gap-2 bg-orange-500 border-3 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Flame className="w-5 h-5 text-white animate-pulse" />
              <span className="font-bold pixel-text text-white text-sm">
                {streak}
              </span>
            </div>

            {/* Energy */}
            <div className="hidden sm:flex items-center gap-2 bg-cyan-500 border-3 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-5 h-5 text-white" />
              <span className="font-bold pixel-text text-white text-sm">
                {energy}/10
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
