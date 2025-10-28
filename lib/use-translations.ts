"use client";

import { useLanguage } from "@/hooks/use-language";
import { translations } from "./translations";

export function useTranslations() {
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key];
  };

  return { t, language };
}
