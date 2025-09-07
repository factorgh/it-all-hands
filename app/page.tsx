import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { DonateSection } from "@/components/donate-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <ContactSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
