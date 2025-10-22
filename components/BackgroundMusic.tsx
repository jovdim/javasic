"use client";

import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/hooks/use-sound";

export function BackgroundMusic() {
  const { playClick, toggleMusic, musicEnabled } = useSound();

  const handleMusicToggle = () => {
    playClick(); // Play the click sound
    toggleMusic(); // Toggle the music
  };

  return (
    <Button
      onClick={handleMusicToggle}
      size="icon"
      variant="outline"
      className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 border-3 text-black click-animation-3d"
      title={musicEnabled ? "Mute Music" : "Play Music"}
    >
      {musicEnabled ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </Button>
  );
}
