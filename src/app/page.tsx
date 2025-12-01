import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { DivePackagesSection } from '@/components/DivePackagesSection';
import { GalleryPreviewSection } from '@/components/GalleryPreviewSection';
import { ExperienceBadgeSection } from '@/components/ExperienceBadgeSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary-dark">
      <Navigation />
      <HeroSection />
      <DivePackagesSection />
      <GalleryPreviewSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
