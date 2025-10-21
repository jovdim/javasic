"use client";

import { CourseModules } from "@/components/course-modules";
import { ProgressStats } from "@/components/progress-stats";

export function CourseContent() {
  return (
    <div
      id="course-section"
      className="container mx-auto px-4 py-8 md:py-12 max-w-7xl"
    >
      {/* M -  Stats on top, D -  Stats on right */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Progress stats - shows on top for mobile */}
        <div className="lg:hidden">
          <ProgressStats />
        </div>

        {/* Main content - Course modules */}
        <div className="lg:col-span-2">
          <CourseModules />
        </div>

        {/* Progress stats - shows on right for desktop */}
        <div className="hidden lg:block lg:col-span-1">
          <ProgressStats />
        </div>
      </div>
    </div>
  );
}
