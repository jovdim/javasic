import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CourseContent } from "@/components/course-content";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navbar />
      <HeroSection />
      <CourseContent />
      <Footer />
    </main>
  );
}
