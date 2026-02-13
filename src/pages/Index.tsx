import HeroSection from "@/components/resume/HeroSection";
import AboutSection from "@/components/resume/AboutSection";
import SkillsSection from "@/components/resume/SkillsSection";
import EducationSection from "@/components/resume/EducationSection";
import DownloadButton from "@/components/resume/DownloadButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />

      <footer className="py-8 px-4 text-center text-sm text-muted-foreground border-t">
        <p>© 2025 Nazifa Afrin Sawda. All rights reserved.</p>
      </footer>

      <DownloadButton />
    </main>
  );
};

export default Index;
