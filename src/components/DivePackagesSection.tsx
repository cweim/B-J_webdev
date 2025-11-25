'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { Zap, Users, Waves } from 'lucide-react';

const DIVE_PACKAGES = [
  {
    id: 1,
    title: 'Beginner Discovery',
    description: 'Perfect for first-time divers. Learn the basics in shallow, safe waters.',
    difficulty: 'Beginner',
    duration: '2.5 hours',
    depth: 'Up to 12m',
    groupSize: 'Max 4 people',
    price: 'RM 280',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=500&auto=format&fit=crop',
    highlights: ['Reef Sharks', 'Coral Gardens', 'Tropical Fish'],
  },
  {
    id: 2,
    title: 'Reef Explorer',
    description: 'Explore vibrant coral reefs and encounter colorful marine life.',
    difficulty: 'Intermediate',
    duration: '3 hours',
    depth: 'Up to 18m',
    groupSize: 'Max 6 people',
    price: 'RM 380',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=500&auto=format&fit=crop',
    highlights: ['Angelfish', 'Sea Turtles', 'Coral Formations'],
  },
  {
    id: 3,
    title: 'Deep Blue Adventure',
    description: 'For experienced divers. Descend deeper to discover the abyss.',
    difficulty: 'Advanced',
    duration: '4 hours',
    depth: 'Up to 30m',
    groupSize: 'Max 4 people',
    price: 'RM 520',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=500&auto=format&fit=crop',
    highlights: ['Deep Water Species', 'Rock Formations', 'Underwater Caves'],
  },
  {
    id: 4,
    title: 'Night Dive Expedition',
    description: 'Experience the magical world of nocturnal marine creatures.',
    difficulty: 'Intermediate',
    duration: '2 hours',
    depth: 'Up to 15m',
    groupSize: 'Max 4 people',
    price: 'RM 350',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=500&auto=format&fit=crop',
    highlights: ['Nocturnal Fish', 'Bioluminescence', 'Octopus Encounters'],
  },
  {
    id: 5,
    title: 'Wreck Discovery',
    description: 'Explore sunken wrecks and historical underwater sites.',
    difficulty: 'Advanced',
    duration: '3.5 hours',
    depth: 'Up to 28m',
    groupSize: 'Max 3 people',
    price: 'RM 480',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=500&auto=format&fit=crop',
    highlights: ['Historic Wrecks', 'Unique Ecosystems', 'Photography Opportunities'],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Intermediate':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Advanced':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    default:
      return 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30';
  }
};

export const DivePackagesSection: React.FC = () => {
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
    <section id="packages" className="py-16 md:py-24 bg-primary-navy">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dive Packages for Every Level
          </h2>
          <p className="text-text-gray max-w-2xl">
            Choose the perfect diving experience tailored to your skill level. All packages include professional guidance, safety equipment, and unforgettable memories.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
        >
          {DIVE_PACKAGES.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants}>
              <div className="group relative rounded-2xl overflow-hidden border-2 border-border-cyan bg-primary-dark hover:border-accent-cyan transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                        pkg.difficulty
                      )}`}
                    >
                      {pkg.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 md:p-5 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-sm text-text-gray mb-4 flex-1">{pkg.description}</p>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-4 border-t border-border-cyan/30 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Waves size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="text-text-gray">{pkg.depth}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="text-text-gray">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="text-text-gray">{pkg.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 border-t border-border-cyan/30 pt-4">
                    <p className="text-xs text-accent-cyan font-semibold mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-xs rounded border border-accent-cyan/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border-cyan/30">
                    <span className="text-xl md:text-2xl font-bold text-accent-cyan">{pkg.price}</span>
                    <button className="px-3 py-2 md:px-4 md:py-2 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300 text-sm font-semibold">
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
