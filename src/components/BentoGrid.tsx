'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const experiments = [
  {
    title: 'GathorChat',
    subtitle: 'FEATURING',
    description:
      'Real-time conversations, reimagined. A fast, clean chat platform built for people who value simplicity and speed.',
    badge: 'Live Experiment',
    link: 'https://chat.gathor.online',
    bg: 'from-blue-100 via-indigo-100 to-purple-100',
    accentBg: 'bg-gradient-to-br from-[#2D7FF9]/10 via-[#5C6BC0]/10 to-[#8A4FFF]/10',
    dotColor: 'bg-[#2D7FF9]',
    iconColor: '#2D7FF9',
    iconBg: 'from-[#2D7FF9] to-[#8A4FFF]',
  },
  {
    title: 'Mailor',
    subtitle: 'FEATURING',
    description:
      'AI-powered email automation that writes, organizes, and sends for you. Zero cost, zero friction. Your inbox, supercharged.',
    badge: 'Free Utility',
    link: 'https://mailor.gathor.online',
    bg: 'from-sky-100 via-cyan-50 to-blue-100',
    accentBg: 'bg-gradient-to-br from-[#0EA5E9]/10 via-[#2D7FF9]/10 to-[#38BDF8]/10',
    dotColor: 'bg-[#0EA5E9]',
    iconColor: '#0EA5E9',
    iconBg: 'from-[#2D7FF9] to-[#38BDF8]',
  },
  {
    title: 'Resume Analyzer',
    subtitle: 'FEATURING',
    description:
      'An AI Telegram bot that analyzes your resume against job descriptions. Get a match score with actionable fixes — instantly.',
    badge: 'Telegram Bot',
    link: 'https://t.me/resume_analyzer_gathor_bot',
    bg: 'from-purple-100 via-violet-50 to-fuchsia-100',
    accentBg: 'bg-gradient-to-br from-[#8A4FFF]/10 via-[#A855F7]/10 to-[#C084FC]/10',
    dotColor: 'bg-[#8A4FFF]',
    iconColor: '#8A4FFF',
    iconBg: 'from-[#8A4FFF] to-[#C084FC]',
  },
  {
    title: 'SipUp',
    subtitle: 'COMING SOON',
    description:
      'Hydration with a game layer. Track your daily water intake, earn streaks, compete with friends, and hit your health goals.',
    badge: 'In Development',
    link: undefined,
    bg: 'from-orange-100 via-amber-50 to-yellow-100',
    accentBg: 'bg-gradient-to-br from-[#FF8B3D]/10 via-[#FBBF24]/10 to-[#F59E0B]/10',
    dotColor: 'bg-[#FF8B3D]',
    iconColor: '#FF8B3D',
    iconBg: 'from-[#FF8B3D] to-[#FBBF24]',
  },
];

function ExperimentIcon({ index, size = 120 }: { index: number; size?: number }) {
  const gradId = `iconGrad${index}`;
  if (index === 0) {
    return (
      <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D7FF9" />
            <stop offset="100%" stopColor="#8A4FFF" />
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="100" height="70" rx="35" fill={`url(#${gradId})`} opacity="0.15" />
        <rect x="10" y="20" width="100" height="70" rx="35" stroke={`url(#${gradId})`} strokeWidth="3" fill="none" />
        <path d="M35 100L48 90H65" stroke={`url(#${gradId})`} strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="42" cy="55" r="6" fill="#2D7FF9" />
        <circle cx="60" cy="55" r="6" fill="#5C6BC0" />
        <circle cx="78" cy="55" r="6" fill="#8A4FFF" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D7FF9" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect x="10" y="25" width="100" height="70" rx="14" fill={`url(#${gradId})`} opacity="0.12" />
        <rect x="10" y="25" width="100" height="70" rx="14" stroke={`url(#${gradId})`} strokeWidth="3" fill="none" />
        <path d="M10 35L60 65L110 35" stroke="#2D7FF9" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M88 42L98 34" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round" />
        <path d="M92 52L102 44" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M84 36L94 28" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A4FFF" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <rect x="25" y="8" width="70" height="104" rx="10" fill={`url(#${gradId})`} opacity="0.12" />
        <rect x="25" y="8" width="70" height="104" rx="10" stroke={`url(#${gradId})`} strokeWidth="3" fill="none" />
        <line x1="38" y1="32" x2="82" y2="32" stroke="#8A4FFF" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="48" x2="72" y2="48" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="64" x2="76" y2="64" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="80" x2="68" y2="80" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M86 82L89 88L94 86L89 91L90 98L86 93L82 98L83 91L78 86L83 88L86 82Z" fill="#C084FC" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8B3D" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <path d="M40 25C40 25 35 50 35 70C35 90 47 108 60 108C73 108 85 90 85 70C85 50 80 25 80 25" fill={`url(#${gradId})`} opacity="0.15" />
      <path d="M40 25C40 25 35 50 35 70C35 90 47 108 60 108C73 108 85 90 85 70C85 50 80 25 80 25" stroke={`url(#${gradId})`} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M44 72C48 68 72 68 76 72" stroke="#FF8B3D" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M47 60C50 57 70 57 73 60" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <circle cx="60" cy="16" r="5" fill="#FF8B3D" />
    </svg>
  );
}

export default function BentoGrid() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % experiments.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const goTo = (i: number) => {
    setActive(i);
    resetTimer();
  };

  const exp = experiments[active];

  return (
    <section id="experiments" ref={sectionRef} className="relative fluid-section-padding">
      <div className="fluid-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M9 3L10.5 7.5L15 6L12 10L15 14L10.5 12.5L9 17L7.5 12.5L3 14L6 10L3 6L7.5 7.5L9 3Z" fill="url(#sg2)" />
              <defs>
                <linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8B3D" />
                  <stop offset="50%" stopColor="#2D7FF9" />
                  <stop offset="100%" stopColor="#8A4FFF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="featuring-badge">
              Our Experiments
            </span>
          </div>
          <h2 className="fluid-section-heading text-[#1F2937]">
            Built in the Lab,{' '}
            <span className="gradient-text">made for everyone.</span>
          </h2>
        </motion.div>

        {/* Carousel Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.15 }}
          className="relative"
        >
          {/* Container query wrapper — layout changes based on THIS element's width, not viewport */}
          <div
            className={`carousel-card-wrapper relative overflow-hidden bg-gradient-to-br ${exp.bg} transition-colors duration-700`}
            style={{
              borderRadius: 'clamp(16px, 2.5vw, 32px)',
              minHeight: 'clamp(320px, 35vw, 480px)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="carousel-card-inner"
              >
                {/* Left: Text content */}
                <div className="card-text-content">
                  <span className="featuring-badge mb-5">
                    {exp.subtitle}
                  </span>

                  <h3 className="fluid-card-title text-[#1F2937] mb-5">
                    {exp.title}
                  </h3>

                  <p className="fluid-body text-[#4B5563] mb-8" style={{ maxWidth: '28rem' }}>
                    {exp.description}
                  </p>

                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1F2937] text-white font-semibold rounded-full hover:scale-105 hover:bg-[#111827] transition-all duration-300 shadow-lg shadow-black/10 fluid-cta"
                    >
                      Try It Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-white/60 text-[#6B7280] font-semibold rounded-full border border-white/80 backdrop-blur-sm fluid-cta">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Right: Large Icon / Visual */}
                <div className="card-visual">
                  <div className="fluid-icon-container">
                    {/* Glow behind icon */}
                    <div
                      className="absolute inset-0 rounded-full opacity-30 blur-3xl"
                      style={{
                        background: `radial-gradient(circle, ${exp.iconColor}40 0%, transparent 70%)`,
                      }}
                    />
                    {/* Floating icon with subtle rotation */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 drop-shadow-lg"
                    >
                      <ExperimentIcon index={active} size={180} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative: subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #1F2937 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {experiments.map((e, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${e.title}`}
                className="group relative p-1"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    active === i
                      ? `w-8 h-3 ${e.dotColor}`
                      : 'w-3 h-3 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
