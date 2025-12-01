import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GallerySection } from '@/components/GallerySection';

export const metadata: Metadata = {
  title: 'Gallery | Azure Depths Dive Centre',
  description: 'Browse the full dive gallery: reefs, boats, and life on the surface between dives.',
};

export default function GalleryPage() {
  return (
    <main className="bg-primary-dark min-h-screen">
      <Navigation />
      <div className="pt-28 md:pt-24">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}
