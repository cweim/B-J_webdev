'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setIsOpen(false);
    } else {
      router.push(`/#${id}`);
    }
  };

  const isHomepage = pathname === '/';
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <>
      {/* Desktop Navigation - always visible on desktop */}
      <nav className="hidden md:block fixed top-0 w-full bg-primary-navy/90 backdrop-blur-md z-50 border-b border-border-cyan">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col leading-tight">
              <span className="text-xs tracking-[0.25em] text-accent-cyan">AZURE</span>
              <span className="text-2xl font-bold text-white">Depths</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="flex gap-8 text-white items-center">
            <li>
              <a href="/#home" onClick={handleScroll('home')} className="hover:text-accent-cyan transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/#packages" onClick={handleScroll('packages')} className="hover:text-accent-cyan transition-colors duration-300">
                Packages
              </a>
            </li>
            <li>
              <a href="/#gallery" onClick={handleScroll('gallery')} className="hover:text-accent-cyan transition-colors duration-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="/#about" onClick={handleScroll('about')} className="hover:text-accent-cyan transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={handleScroll('contact')} className="hover:text-accent-cyan transition-colors duration-300">
                Contact
              </a>
            </li>
            <li>
              <Link
                href="/booking"
                className="px-4 py-2 rounded-full bg-accent-cyan text-primary-dark font-semibold hover:bg-accent-cyan/90 transition-colors"
              >
                Book now
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - shows on non-homepage or when menu is open */}
      {!isHomepage && (
        <nav className="md:hidden fixed top-0 w-full bg-primary-navy/90 backdrop-blur-md z-50 border-b border-border-cyan">
          <div className="px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex flex-col leading-tight">
                <span className="text-xs tracking-[0.25em] text-accent-cyan">AZURE</span>
                <span className="text-lg font-bold text-white">Depths</span>
              </div>
            </div>
            <button
              className="text-accent-cyan hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="bg-primary-navy border-t border-border-cyan">
              <div className="px-4 py-4 space-y-4">
                <Link
                  href="/#home"
                  className="block text-white hover:text-accent-cyan transition-colors"
                  onClick={(e) => {
                    handleScroll('home')(e);
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/#packages"
                  className="block text-white hover:text-accent-cyan transition-colors"
                  onClick={(e) => {
                    handleScroll('packages')(e);
                  }}
                >
                  Packages
                </Link>
                <Link
                  href="/#gallery"
                  className="block text-white hover:text-accent-cyan transition-colors"
                  onClick={(e) => {
                    handleScroll('gallery')(e);
                  }}
                >
                  Gallery
                </Link>
                <Link
                  href="/#about"
                  className="block text-white hover:text-accent-cyan transition-colors"
                  onClick={(e) => {
                    handleScroll('about')(e);
                  }}
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="block text-white hover:text-accent-cyan transition-colors"
                  onClick={(e) => {
                    handleScroll('contact')(e);
                  }}
                >
                  Contact
                </Link>
                <Link
                  href="/booking"
                  className="block text-center px-4 py-3 rounded-full bg-accent-cyan text-primary-dark font-semibold hover:bg-accent-cyan/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book now
                </Link>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Subtle Mobile Hamburger on Homepage Only */}
      {isHomepage && (
        <button
          onClick={toggleMenu}
          className="md:hidden fixed top-4 right-4 z-50 text-accent-cyan hover:text-white transition-colors opacity-70 hover:opacity-100"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Mobile Menu Overlay on Homepage */}
      {isHomepage && isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-primary-navy/95 backdrop-blur-md z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            <Link
              href="/#home"
              className="text-2xl text-white hover:text-accent-cyan transition-colors"
              onClick={(e) => {
                handleScroll('home')(e);
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              href="/#packages"
              className="text-2xl text-white hover:text-accent-cyan transition-colors"
              onClick={(e) => {
                handleScroll('packages')(e);
                setIsOpen(false);
              }}
            >
              Packages
            </Link>
            <Link
              href="/#gallery"
              className="text-2xl text-white hover:text-accent-cyan transition-colors"
              onClick={(e) => {
                handleScroll('gallery')(e);
                setIsOpen(false);
              }}
            >
              Gallery
            </Link>
            <Link
              href="/#about"
              className="text-2xl text-white hover:text-accent-cyan transition-colors"
              onClick={(e) => {
                handleScroll('about')(e);
                setIsOpen(false);
              }}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-2xl text-white hover:text-accent-cyan transition-colors"
              onClick={(e) => {
                handleScroll('contact')(e);
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="mt-4 px-6 py-3 rounded-full bg-accent-cyan text-primary-dark font-semibold hover:bg-accent-cyan/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
