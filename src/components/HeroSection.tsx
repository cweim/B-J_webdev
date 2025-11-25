'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Fish } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-ocean-gradient pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format&fit=crop"
          alt="Underwater diving scene with diver and coral"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-6">
            Experience Tioman's Underwater Paradise
          </h1>

          <p className="text-base md:text-lg text-text-gray max-w-xl mb-8 leading-relaxed">
            Discover the crystal-clear waters and vibrant coral reefs of Tioman Island.
            B&J Diving Centre offers unforgettable diving adventures for beginners and experienced divers alike.
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
            <Button size="lg">Explore Packages</Button>
            <Button variant="outline" size="lg">
              View Gallery →
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-cyan"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
