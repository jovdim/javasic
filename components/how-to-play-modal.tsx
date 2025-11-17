"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, GamepadIcon } from "lucide-react";
import { useSound } from "@/hooks/use-sound";
import { useTranslations } from "@/lib/use-translations";

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowToPlayModal({ isOpen, onClose }: HowToPlayModalProps) {
  const { playClick } = useSound();
  const { t } = useTranslations();

  const handleClose = () => {
    playClick();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-gradient-to-br from-purple-900 to-blue-900 border-4 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pixel-text text-yellow-400 flex items-center gap-2">
            <GamepadIcon className="w-6 h-6" />
            {t("howToPlayTitle")}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-3 text-sm text-white">
            <div className="flex items-start gap-2 pt-1">
              <span className="text-yellow-400 font-bold ">•</span>
              <span>{t("howToPlayDesc0")}</span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <span className="text-yellow-400 font-bold ">•</span>
              <span>{t("howToPlayDesc1")}</span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <span className="text-yellow-400 font-bold ">•</span>
              <span>{t("howToPlayDesc2")}</span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <span className="text-yellow-400 font-bold ">•</span>
              <span>{t("howToPlayDesc3")}</span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <span className="text-yellow-400 font-bold ">•</span>
              <span>{t("howToPlayDesc4")}</span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <span className="text-yellow-400 font-bold ">•</span>
              <span>{t("howToPlayDesc5")}</span>
            </div>
          </div>

          <Button
            onClick={handleClose}
            className="w-full bg-yellow-400 hover:bg-yellow-500 border-4 border-black text-black font-bold py-3 pixel-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            {t("gotIt")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
