'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+60 12 345 6789',
      href: 'tel:+60123456789',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bjdivingcentre.com',
      href: 'mailto:info@bjdivingcentre.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tioman Island, Pahang, Malaysia',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '7:00 AM - 6:00 PM (Daily)',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-text-gray max-w-2xl">
            Have questions about our diving packages or ready to book your adventure? Reach out to us and we'll be happy to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-cyan/10 border-2 border-accent-cyan/30 group-hover:border-accent-cyan group-hover:bg-accent-cyan/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent-cyan" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                      <p className="text-text-gray group-hover:text-accent-cyan transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-border-cyan overflow-hidden bg-primary-navy p-6"
            >
              <h4 className="text-white font-semibold mb-4">Why Choose B&J Diving Centre?</h4>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Professional PADI certified instructors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Small group sizes for personalized attention
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Top-quality diving equipment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Unique access to pristine dive sites
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border-2 border-border-cyan bg-primary-navy/50 p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark border-2 border-border-cyan text-white placeholder-text-gray focus:border-accent-cyan focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark border-2 border-border-cyan text-white placeholder-text-gray focus:border-accent-cyan focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your diving experience and interests..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark border-2 border-border-cyan text-white placeholder-text-gray focus:border-accent-cyan focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent-cyan text-primary-dark font-bold rounded-lg hover:bg-accent-cyan/90 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>

              <p className="text-text-gray text-xs mt-4 text-center">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
