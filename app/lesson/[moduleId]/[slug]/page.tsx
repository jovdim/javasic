import { LessonPage } from "@/components/lesson-page"

export default function Lesson({ params }: { params: { moduleId: string; slug: string } }) {
  return <LessonPage moduleId={Number.parseInt(params.moduleId)} slug={params.slug} />
}
