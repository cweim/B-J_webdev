'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-primary-navy/90 backdrop-blur-md z-50 border-b border-border-cyan">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-accent-cyan">B&J</span>
          <span className="text-2xl font-bold text-white ml-1">Diving Centre</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-white">
          <li>
            <Link href="#home" className="hover:text-accent-cyan transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#packages" className="hover:text-accent-cyan transition-colors duration-300">
              Packages
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="hover:text-accent-cyan transition-colors duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-accent-cyan transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-accent-cyan transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent-cyan hover:text-white transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-navy border-t border-border-cyan">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#home"
              className="block text-white hover:text-accent-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#packages"
              className="block text-white hover:text-accent-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="#gallery"
              className="block text-white hover:text-accent-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="block text-white hover:text-accent-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:text-accent-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
