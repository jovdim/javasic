"use client";

import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/use-sound";
import { useTranslations } from "@/lib/use-translations";
import { Coffee, HelpCircle } from "lucide-react";
import { useState } from "react";
import { HowToPlayModal } from "@/components/how-to-play-modal";

export function HeroSection() {
  const { playClick } = useSound();
  const { t } = useTranslations();
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  const scrollToCourse = () => {
    document
      .getElementById("course-curriculum")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openHowToPlay = () => {
    playClick();
    setIsHowToPlayOpen(true);
  };

  return (
    <>
      <section className="text-white relative min-h-[70vh] md:h-[500px] overflow-hidden hero-gradient flex items-center justify-center">
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
              {t("startLearning")}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 md:mb-6 pixel-text text-primary">
            JAVASIC
          </h1>

          <p className="text-base md:text-xl text-foreground/90 mb-6 md:mb-8 max-w-2xl font-medium">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              size="lg"
              onClick={() => {
                scrollToCourse();
                playClick();
              }}
              className="text-xl bg-yellow-500 hover:bg-amber-600 click-animation-3d"
            >
              {t("startLearning")}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={openHowToPlay}
              className="border-2 border-white/50 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer hover:scale-102"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              {t("howToPlay")}
            </Button>
          </div>
        </div>
      </section>

      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
      />
    </>
  );
}
