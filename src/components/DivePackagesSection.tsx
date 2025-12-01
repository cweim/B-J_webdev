'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from './ui/Container';
import { divePackages } from '@/lib/packages';
import { Zap, Users, Waves, Compass } from 'lucide-react';

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
        Sample Packages & Courses
          </h2>
          <p className="text-text-gray max-w-2xl">
        This template includes sample courses and pricing. Click any card to see the details page, and customize these packages to match your actual offerings.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
        >
          {divePackages.map((pkg) => (
            <motion.div key={pkg.slug} variants={itemVariants}>
              <Link
                href={`/packages/${pkg.slug}`}
                className="group block relative rounded-2xl overflow-hidden border-2 border-border-cyan bg-primary-dark hover:border-accent-cyan transition-all duration-300 h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/40 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border border-accent-cyan/50 bg-accent-cyan/15 text-accent-cyan">
                      <Compass size={14} />
                      {pkg.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{pkg.title}</h3>
                      <p className="text-xs text-text-gray">{pkg.level}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                        {pkg.duration}
                      </span>
                      <span className="text-[11px] text-text-gray">{pkg.category}</span>
                    </div>
                  </div>

                  <p className="text-sm text-text-gray leading-relaxed">{pkg.description}</p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 border-t border-border-cyan/30 pt-3">
                    <div className="flex items-center gap-2 text-xs">
                      <Waves size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="text-text-gray">Depth/skills by course</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Zap size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="text-text-gray">{pkg.category === 'Leisure Dive' ? 'Guided dives' : 'Training dives'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Users size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="text-text-gray">Small groups</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {pkg.highlights && (
                    <div className="border-t border-border-cyan/30 pt-3 flex flex-wrap gap-2">
                      {pkg.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-xs rounded border border-accent-cyan/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-border-cyan/30">
                    <span className="text-xl md:text-2xl font-bold text-accent-cyan">{pkg.price}</span>
                    <span className="px-3 py-2 md:px-4 md:py-2 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan rounded-lg group-hover:bg-accent-cyan group-hover:text-primary-dark transition-all duration-300 text-sm font-semibold">
                      View details
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
