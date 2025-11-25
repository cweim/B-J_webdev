'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy border-t border-border-cyan py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-accent-cyan">B&J</span>
              <span className="text-xl font-bold text-white ml-1">Diving Centre</span>
            </div>
            <p className="text-text-gray text-sm">
              Experience the wonders of Tioman Island's underwater world with safety, expertise, and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-text-gray text-sm">
              <li>
                <Link href="#home" className="hover:text-accent-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-accent-cyan transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-accent-cyan transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-text-gray text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent-cyan" />
                +60 12 345 6789
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent-cyan" />
                info@bjdivingcentre.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-cyan" />
                Tioman Island, Malaysia
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/bjdivingcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-dark border-2 border-accent-cyan flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-primary-dark transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://instagram.com/bjdivingcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-dark border-2 border-accent-cyan flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-primary-dark transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-cyan mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-text-gray text-sm">
          <p>&copy; {currentYear} B&J Diving Centre. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
