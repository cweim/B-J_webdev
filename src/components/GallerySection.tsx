'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { X } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop',
    alt: 'Divers exploring vibrant coral reef',
    title: 'Coral Paradise',
    location: 'Tioman Island',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800&auto=format&fit=crop',
    alt: 'Sea turtle swimming underwater',
    title: 'Gentle Sea Turtle',
    location: 'Tiger Rock',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    alt: 'School of tropical fish in blue water',
    title: 'Tropical Fish School',
    location: 'South Rock',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&auto=format&fit=crop',
    alt: 'Colorful reef with fish',
    title: 'Reef Exploration',
    location: 'Beacon Rock',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop',
    alt: 'Diver with underwater rock formations',
    title: 'Rock Formations',
    location: 'Cathedral',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800&auto=format&fit=crop',
    alt: 'Close-up of clownfish in anemone',
    title: 'Clownfish Home',
    location: 'Coral Garden',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    alt: 'Diver with manta ray',
    title: 'Manta Ray Encounter',
    location: 'Deep Blue',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&auto=format&fit=crop',
    alt: 'Sunset view over ocean',
    title: 'Golden Hour',
    location: 'Surface',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-primary-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dive Gallery
          </h2>
          <p className="text-text-gray max-w-2xl">
            Explore stunning moments captured during our diving adventures around Tioman Island.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              className="relative rounded-2xl overflow-hidden border-2 border-border-cyan group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm md:text-base">{image.title}</h3>
                <p className="text-accent-cyan text-xs">{image.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent-cyan transition-colors z-60"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl border-2 border-border-cyan"
            />

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-accent-cyan">{selectedImage.location}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
