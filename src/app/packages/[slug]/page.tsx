import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, Users, ShieldCheck, Compass, ArrowLeft } from 'lucide-react';
import { divePackages, getPackageBySlug } from '@/lib/packages';

type PackagePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return divePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return { title: 'Package not found' };

  return {
    title: `${pkg.title} | Azure Depths Dive Centre`,
    description: pkg.description,
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  const pkg = getPackageBySlug(params.slug);

  if (!pkg) return notFound();

  return (
    <main className="bg-primary-dark min-h-screen">
      <Navigation />
      <div className="pt-24">
        <Container className="mb-4">
          <Link
            href="/#packages"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to packages
          </Link>
        </Container>
      </div>
      <section className="pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/40" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-accent-cyan/50 bg-accent-cyan/15 text-accent-cyan">
                  <Compass size={14} />
                  {pkg.category}
                </span>
                <span className="text-text-gray text-sm">{pkg.level}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{pkg.title}</h1>
              <p className="text-text-gray max-w-2xl">{pkg.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl font-semibold text-accent-cyan">{pkg.price}</span>
                <span className="text-sm text-text-gray flex items-center gap-2">
                  <Clock size={16} className="text-accent-cyan" />
                  {pkg.duration}
                </span>
                <span className="text-sm text-text-gray flex items-center gap-2">
                  <Users size={16} className="text-accent-cyan" />
                  Small group ratios
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/booking">
                <Button size="lg">Book now</Button>
              </Link>
              <Link href="/#packages">
                <Button variant="outline" size="lg">
                  Back to packages
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border-2 border-border-cyan bg-primary-navy/60 p-6">
              <h2 className="text-xl font-bold text-white mb-4">What&apos;s included</h2>
              <ul className="space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-gray">
                    <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-border-cyan bg-primary-navy/60 p-6 space-y-4">
              <h2 className="text-xl font-bold text-white">Who this is for</h2>
              <p className="text-text-gray">
                Ideal for divers who match the level listed above. Bring your certification card (if applicable), logbook, and completed medical form. We tailor schedules around ferry/flight times and can provide e-learning links before you arrive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border-cyan/40 bg-primary-dark/60">
                  <p className="text-white font-semibold mb-2">What to prep</p>
                  <ul className="space-y-1 text-sm text-text-gray list-disc list-inside">
                    <li>Cert proof &amp; recent dive history (if certified)</li>
                    <li>Medical self-declaration</li>
                    <li>Gear sizes if renting</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-border-cyan/40 bg-primary-dark/60">
                  <p className="text-white font-semibold mb-2">Add-ons you can offer</p>
                  <ul className="space-y-1 text-sm text-text-gray list-disc list-inside">
                    <li>Nitrox fills or night dive</li>
                    <li>Private guide or photographer</li>
                    <li>Extra fun dives after course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border-2 border-border-cyan bg-primary-navy/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-accent-cyan">
                <ShieldCheck className="w-5 h-5" />
                <p className="font-semibold">Booking quick facts</p>
              </div>
              <ul className="text-sm text-text-gray space-y-2 list-disc list-inside">
                <li>Hold a spot with a deposit or card capture.</li>
                <li>Free date changes up to 72 hours before.</li>
                <li>Weather/conditions plan shared day prior.</li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-accent-cyan bg-accent-cyan/10 p-5 space-y-3">
              <p className="text-white font-semibold">Ready to book?</p>
              <p className="text-text-gray text-sm">
                Start a booking and we&apos;ll confirm dates, crew, and any add-ons like Nitrox or night dives.
              </p>
              <Link href="/booking">
                <Button className="w-full">Book now</Button>
              </Link>
              <Link href="/#contact" className="text-accent-cyan text-sm underline">
                Prefer to talk to someone? Contact the team
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
