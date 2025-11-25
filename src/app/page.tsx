import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { DivePackagesSection } from '@/components/DivePackagesSection';
import { GallerySection } from '@/components/GallerySection';
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
      <GallerySection />
      <ExperienceBadgeSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
