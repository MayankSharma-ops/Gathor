'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'The Lab', href: '#hero' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Our DNA', href: '#dna' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 30, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-3 py-2 flex items-center gap-1 transition-shadow duration-500 ${
          scrolled ? 'shadow-lg shadow-black/5' : 'shadow-md shadow-black/3'
        }`}
        style={{ width: 'min(90vw, 680px)' }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 pl-3 pr-4 shrink-0">
          <span className="relative flex items-center justify-center w-7 h-7">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <defs>
                <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8B3D" />
                  <stop offset="50%" stopColor="#2D7FF9" />
                  <stop offset="100%" stopColor="#8A4FFF" />
                </linearGradient>
              </defs>
              <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z" stroke="url(#sparkGrad)" strokeWidth="1.5" fill="url(#sparkGrad)" opacity="0.9"/>
            </svg>
          </span>
          <span className="text-lg font-bold text-[#1F2937] tracking-tight">Gathor</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#1F2937] rounded-full hover:bg-black/[0.04] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 shrink-0 shadow-md shadow-purple-500/20"
        >
          Join Waitlist
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-auto mr-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-[2px] bg-[#1F2937] rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] bg-[#1F2937] rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-[2px] bg-[#1F2937] rounded-full"
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 glass rounded-3xl p-4 flex flex-col gap-1 md:hidden shadow-xl"
            style={{ width: 'min(90vw, 400px)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 text-base font-medium text-[#1F2937] rounded-2xl hover:bg-black/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="gradient-bg text-white text-base font-semibold px-5 py-3 rounded-full text-center mt-2 shadow-md shadow-purple-500/20"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
