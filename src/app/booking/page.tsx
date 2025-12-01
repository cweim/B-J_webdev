import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BookingSection } from '@/components/BookingSection';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Booking | Azure Depths Dive Centre',
  description: 'Book dive courses, guided dives, and specialties with Azure Depths. Pick dates and tell us about your group.',
};

export default function BookingPage() {
  return (
    <main className="bg-primary-dark min-h-screen">
      <Navigation />
      <div className="pt-28 md:pt-24">
        <Container className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to home
          </Link>
        </Container>
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
