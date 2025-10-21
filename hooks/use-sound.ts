"use client";

import { useCallback, useRef, useState, useEffect } from "react";

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);

  // Initialize background music
  useEffect(() => {
    if (typeof window !== "undefined") {
      backgroundMusicRef.current = new Audio("/sounds/background-music.mp3"); // ✅ Correct path
      backgroundMusicRef.current.loop = true;
      backgroundMusicRef.current.volume = 0.1;
    }
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const toggleMusic = useCallback(() => {
    setMusicEnabled((prev) => {
      if (!prev) {
        // Start music
        backgroundMusicRef.current?.play().catch(console.error);
      } else {
        // Stop music
        backgroundMusicRef.current?.pause();
      }
      return !prev;
    });
  }, []);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  // Play MP3 sound
  const playSound = useCallback(
    (soundFile: string, volume: number = 0.7) => {
      if (!soundEnabled) return;

      try {
        const audio = new Audio(soundFile);
        audio.volume = volume;
        audio.play().catch(console.error);
      } catch (error) {
        console.error("Error playing sound:", error);
      }
    },
    [soundEnabled]
  );

  // Short UI sounds
  const playClick = useCallback(() => {
    playSound("/sounds/click.mp3", 0.5);
  }, [playSound]);

  const playToggleHint = useCallback(() => {
    playSound("/sounds/showhint.mp3", 1);
  }, [playSound]);

  const playHover = useCallback(() => {
    playSound("/sounds/hover.mp3", 0.3);
  }, [playSound]);

  const playSelect = useCallback(() => {
    playSound("/sounds/select.mp3", 0.6);
  }, [playSound]);

  // Gameplay sounds
  const playCorrect = useCallback(() => {
    playSound("/sounds/correct.mp3", 0.8);
  }, [playSound]);

  const playWrong = useCallback(() => {
    playSound("/sounds/wrong.mp3", 0.8);
  }, [playSound]);

  const playLevelUp = useCallback(() => {
    playSound("/sounds/level-up.mp3", 1.0);
  }, [playSound]);

  const playUnlock = useCallback(() => {
    playSound("/sounds/unlock.mp3", 0.8);
  }, [playSound]);

  const playComplete = useCallback(() => {
    playSound("/sounds/correct.mp3", 0.9);
  }, [playSound]);

  const playXPGain = useCallback(() => {
    playSound("/sounds/xp-gain.mp3", 0.6);
  }, [playSound]);

  const playEnergyLoss = useCallback(() => {
    playSound("/sounds/energy-loss.mp3", 0.7);
  }, [playSound]);

  const playStreak = useCallback(() => {
    playSound("/sounds/streak.mp3", 0.9);
  }, [playSound]);

  const playBadge = useCallback(() => {
    playSound("/sounds/correct.mp3", 1.0);
  }, [playSound]);

  // Background music control
  useEffect(() => {
    if (backgroundMusicRef.current) {
      if (musicEnabled) {
        backgroundMusicRef.current.play().catch(console.error);
      } else {
        backgroundMusicRef.current.pause();
      }
    }
  }, [musicEnabled]);

  return {
    soundEnabled,
    musicEnabled,
    playToggleHint,
    toggleSound,
    toggleMusic,
    playClick,
    playHover,
    playSelect,
    playCorrect,
    playWrong,
    playLevelUp,
    playUnlock,
    playComplete,
    playXPGain,
    playEnergyLoss,
    playStreak,
    playBadge,
  };
}
