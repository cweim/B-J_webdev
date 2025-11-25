'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Card } from './ui/Card';

const FEATURES = [
  {
    id: 1,
    title: 'Surfing',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Free Diving',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Scuba Diving',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop',
    description: 'Extraordinary sea diving experiences that will leave you breathless',
  },
  {
    id: 4,
    title: 'Snorkeling Dive',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop',
  },
];

export const FeaturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experiences" className="py-16 md:py-24 bg-primary-navy">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore The Wonders Of Sea Diving With Us
          </h2>
          <p className="text-text-gray max-w-2xl">
            Are you ready to plunge into the majestic depths of the underwater world?
          </p>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <Card
                imageUrl={feature.image}
                imageAlt={feature.title}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg">Explore More</Button>
        </motion.div>
      </Container>
    </section>
  );
};
