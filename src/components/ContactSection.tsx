'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Mail, Phone, MapPin, Clock, Loader } from 'lucide-react';
import { showToast } from './Toast';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    showToast('Message sent successfully! We\'ll be in touch within 24 hours.', 'success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@template.com',
      href: 'mailto:contact@template.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Template Location',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Customize as needed',
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
            Get in touch (Template Form)
          </h2>
          <p className="text-text-gray max-w-2xl">
            This is a fully functional contact form template. Try submitting the form to see the validation, loading states, and success notification in action. All form data is logged to the console.
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
              <h4 className="text-white font-semibold mb-4">Template Features</h4>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Form validation with error messages
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Toast notifications for user feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Loading states and success confirmations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  Fully customizable colors and content
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
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg bg-primary-dark border-2 text-white placeholder-text-gray focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-border-cyan focus:border-accent-cyan'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
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
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg bg-primary-dark border-2 text-white placeholder-text-gray focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-border-cyan focus:border-accent-cyan'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
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
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg bg-primary-dark border-2 text-white placeholder-text-gray focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-border-cyan focus:border-accent-cyan'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent-cyan text-primary-dark font-bold rounded-lg hover:bg-accent-cyan/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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
