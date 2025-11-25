'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';

export const ExperienceBadgeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discover Tioman's Underwater Treasures
            </h2>
            <p className="text-text-gray leading-relaxed">
              At B&J Diving Centre, we offer immersive diving experiences with pristine coral reefs,
              abundant marine life, and world-class instruction. Feel the rush of exploring vibrant
              underwater ecosystems with experienced guides who know Tioman Island like no one else.
            </p>
          </motion.div>

          {/* Right Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="border-2 border-accent-cyan rounded-full px-8 md:px-12 py-8 text-center w-fit">
              <div className="text-4xl md:text-5xl font-bold text-white">8+</div>
              <div className="text-accent-cyan text-sm mt-2">Years Operating</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
