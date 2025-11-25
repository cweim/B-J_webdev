'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

const DIVE_SPOTS = [
  {
    id: 1,
    title: 'Coral Reefs',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=500&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Mexico',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=400&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 3,
    title: 'Egypt',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 4,
    title: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 5,
    title: 'Thailand',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2',
  },
];

export const DiveSpotsSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-primary-navy">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready To Dive Into The Deep Blue Sea
            </h2>
            <p className="text-text-gray max-w-2xl">
              Experienced diver or a beginner, join us on an adventure you won't forget!
            </p>
          </div>
          <Button size="lg" className="w-full md:w-auto">View All Spots</Button>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {DIVE_SPOTS.map((spot) => (
            <motion.div
              key={spot.id}
              variants={itemVariants}
              className={`${spot.span} relative overflow-hidden rounded-2xl border-2 border-border-cyan group cursor-pointer h-64 md:h-80`}
            >
              <img
                src={spot.image}
                alt={spot.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold text-lg md:text-xl">{spot.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
