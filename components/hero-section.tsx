"use client";

import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/use-sound";
import { Coffee } from "lucide-react";

export function HeroSection() {
  const { playClick } = useSound();
  const scrollToCourse = () => {
    document
      .getElementById("course-curriculum")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="text-white relative min-h-[70vh] md:h-[500px] overflow-hidden hero-gradient flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20" />
      {/* Pixelated sunset landscape background */}
      <div id="parallax-banner" className="absolute inset-0 inner-layer">
        <div className="absolute inset-0 bg-black">
          <img
            src="/banner-bg.png"
            alt="Mountain background"
            className="w-full h-full object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img
            src="/background-banner-foreground.gif"
            alt="Animated overlay"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              object-[80%_bottom]   /* 👈 Focus a bit more to the left */
              sm:object-[60%_bottom] /* Slightly center on small screens */
              md:object-[70%_bottom] /* Balanced center-left on desktop */
            "
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        {/* gradient overleh*/}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center py-12 z-30">
        <div className="flex items-center gap-2 mb-4">
          <Coffee className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wider pixel-text">
            Learn Java Fundamentals
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 md:mb-6 pixel-text text-primary">
          JAVASIC
        </h1>

        <p className="text-base md:text-xl text-foreground/90 mb-6 md:mb-8 max-w-2xl font-medium">
          Master Java fundamentals through gamified lessons and quizzes. No
          coding required - just learn, answer, and level up!
        </p>

        <Button
          size="lg"
          onClick={() => {
            scrollToCourse();
            playClick();
          }}
          className=" flex items-center text-md  bg-yellow-500 hover:bg-amber-600 border-3 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer "
        >
          START LEARNING FREE
        </Button>
      </div>
    </section>
  );
}
