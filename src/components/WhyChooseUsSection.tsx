'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { CheckCircle2 } from 'lucide-react';

const FEATURES = [
  'Fully responsive mobile design',
  'Live form validation & notifications',
  'Booking system with dynamic pricing',
  'Photo gallery with lightbox modal',
  'Contact form with email integration',
  'Built with Next.js & Tailwind CSS',
];

export const WhyChooseUsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-primary-dark">
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
              Why use this template?
            </h2>
            <p className="text-text-gray mb-8 leading-relaxed">
              This template includes everything a water sports business needs: a responsive design, working booking forms with validation, a photo gallery, package management, and contact forms with live notifications. All interactions are fully functional and ready to customize.
            </p>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {FEATURES.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <Button size="lg">Customize for your business</Button>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-border-cyan">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop"
                alt="School of colorful fish"
                className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-border-cyan">
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=400&auto=format&fit=crop"
                alt="Coral reef with marine life"
                className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
