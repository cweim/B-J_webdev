'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Fish } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-ocean-gradient md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1920&auto=format&fit=crop"
          alt="Underwater diving scene with diver and coral"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/50 to-transparent" />
      </div>
      <div className="orb-cyan -right-10 top-10" />
      <div className="orb-blue -left-16 bottom-8" />

      {/* Content */}
      <Container className="relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-dark/70 border border-border-cyan/60 text-accent-cyan text-sm mb-4 backdrop-blur">
            ✨ Template Site Demo • Customizable • Ready to Deploy
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6 drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
            Your Dive Centre Booking Website Template
          </h1>

          <p className="text-base md:text-lg text-text-gray max-w-2xl mb-8 leading-relaxed">
            This is a fully functional template designed to show dive centres and water sports operators how a modern, professional booking website can work. All interactions are live—customize the content, colors, and packages to match your business.
          </p>

          {/* Decorative Fish Icon */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8"
          >
            <Fish className="w-12 h-12 md:w-16 md:h-16 text-accent-cyan" />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => router.push('/booking')}
            >
              Try the booking form
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>
              View sample packages →
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {[
              { label: 'Fully responsive design', value: 'Mobile-first' },
              { label: 'Form validation included', value: 'Production ready' },
              { label: 'Live notifications', value: 'User feedback' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border-cyan/40 bg-primary-dark/60 p-4 backdrop-blur flex flex-col gap-1"
              >
                <span className="text-text-gray text-xs uppercase tracking-wide">{item.label}</span>
                <span className="text-white font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator - centered using flexbox */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 inset-x-0 flex justify-center text-accent-cyan"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
