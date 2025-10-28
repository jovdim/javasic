"use client";

import { courseData } from "@/lib/course-data";
import { courseDataTagalog } from "@/lib/course-data-tagalog";
import { lessonContent } from "@/lib/lesson-content";
import { lessonContentTagalog } from "@/lib/lesson-content-tagalog";
import { useLanguage } from "./use-language";

export function useCourseContent() {
  const { language } = useLanguage();
  console.log("Current language:", language);
  const currentCourseData = language === "tl" ? courseDataTagalog : courseData;
  const currentLessonContent =
    language === "tl" ? lessonContentTagalog : lessonContent;

  return {
    courseData: currentCourseData,
    lessonContent: currentLessonContent,
    language,
  };
}
