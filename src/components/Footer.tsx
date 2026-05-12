'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { label: 'GathorChat', href: 'https://chat.gathor.online' },
  { label: 'Mailor', href: 'https://mailor.gathor.online' },
  { label: 'Resume Bot', href: 'https://t.me/resume_analyzer_gathor_bot' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/gathor' },
  { label: 'Contact', href: 'mailto:hello@gathor.online' },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative py-20 px-6 overflow-hidden bg-white/50">
      {/* Large faded Gathor wordmark in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[120px] sm:text-[180px] md:text-[240px] font-extrabold text-[#F3F4F6] tracking-tight">
          Gathor
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12"
        >
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                <defs>
                  <linearGradient id="footerSparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF8B3D" />
                    <stop offset="50%" stopColor="#2D7FF9" />
                    <stop offset="100%" stopColor="#8A4FFF" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z"
                  fill="url(#footerSparkGrad)"
                  opacity="0.9"
                />
              </svg>
              <span className="text-xl font-bold text-[#1F2937]">Gathor</span>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-xs">
              An experimental product studio where all people gather.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
                Experiments
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
                Connect
              </h4>
              <ul className="flex flex-col gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Divider and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent mb-6" />
          <p className="text-center text-sm text-[#9CA3AF]">
            Gathor Labs © 2026. Cooking up the future. 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
