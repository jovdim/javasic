"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/use-sound";

export function AudioInitializer() {
  const [audioInitialized, setAudioInitialized] = useState(false);
  const { toggleMusic, musicEnabled } = useSound();

  const initializeAudio = () => {
    setAudioInitialized(true);
    // Auto-start music after user interaction
    setTimeout(() => {
      if (!musicEnabled) {
        toggleMusic();
      }
    }, 500);
  };

  if (!audioInitialized) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 border-4 border-yellow-400 rounded-lg p-8 max-w-md mx-4 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 pixel-text mb-4">
            🎵 WELCOME TO JAVASIC! 🎵
          </h2>
          <p className="text-white mb-6">
            Click below to enable background music and sound effects for the
            best learning experience!
          </p>
          <Button
            onClick={initializeAudio}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold pixel-text text-lg py-4 px-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            🚀 START LEARNING WITH SOUND
          </Button>
          <button
            onClick={() => setAudioInitialized(true)}
            className="mt-4 text-white/70 hover:text-white text-sm underline"
          >
            Continue without sound
          </button>
        </div>
      </div>
    );
  }

  return null;
}
