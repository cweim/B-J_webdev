'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'House Reef & Macro',
    description: 'Shallow corals, macro life, perfect for training and relaxed dives.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Big Fish & Blue Water',
    description: 'Turtles, pelagics, and schooling fish at our signature sites.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Boats, Training & Surface',
    description: 'Life onboard, briefings, and the vibe between dives.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1000&auto=format&fit=crop',
  },
];

export const GalleryPreviewSection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-primary-dark surface-glow relative overflow-hidden">
      <div className="orb-cyan -left-10 top-0" />
      <div className="orb-blue right-0 bottom-0" />
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <p className="text-accent-cyan uppercase tracking-[0.2em] text-xs mb-2">Gallery template</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sample Photo Gallery</h2>
            <p className="text-text-gray max-w-2xl">
              This gallery template showcases how you can organize and display your photos. Replace these sample images with your own high-quality underwater photography.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-primary-dark transition-all"
          >
            View full gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href="/gallery"
                className="relative block h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-border-cyan group"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold">{category.title}</h3>
                  <p className="text-text-gray text-sm">{category.description}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-accent-cyan text-sm">
                    View full gallery <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
