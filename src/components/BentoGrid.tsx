'use client';

import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const experiments = [
  {
    title: 'GathorChat',
    description: 'Real-time conversations, reimagined. A fast, clean chat platform built for people who value simplicity.',
    badge: 'Live Experiment',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    link: 'https://chat.gathor.online',
    featured: true,
    iconId: 'chat',
  },
  {
    title: 'Mailor',
    description: 'AI-powered email automation that writes, organizes, and sends for you. Zero cost, zero friction.',
    badge: 'Free Utility',
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
    link: 'https://mailor.gathor.online',
    iconId: 'mail',
  },
  {
    title: 'Resume Analyzer',
    description: 'An AI Telegram bot that analyzes your resume against job descriptions, scoring it with actionable fixes.',
    badge: 'Telegram Bot',
    badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
    link: 'https://t.me/resume_analyzer_gathor_bot',
    iconId: 'resume',
  },
  {
    title: 'SipUp',
    description: 'Hydration with a game layer. Track your intake, earn streaks, and hit daily goals.',
    badge: 'In Development',
    badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
    iconId: 'sip',
  },
];

function CardIcon({ id }: { id: string }) {
  if (id === 'chat') return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
      <defs><linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2D7FF9"/><stop offset="100%" stopColor="#8A4FFF"/></linearGradient></defs>
      <rect x="4" y="8" width="40" height="28" rx="14" fill="url(#cg)" opacity="0.15"/>
      <rect x="4" y="8" width="40" height="28" rx="14" stroke="url(#cg)" strokeWidth="2.5" fill="none"/>
      <path d="M14 40L20 36H28" stroke="url(#cg)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="18" cy="22" r="2.5" fill="#2D7FF9"/><circle cx="24" cy="22" r="2.5" fill="#5C6BC0"/><circle cx="30" cy="22" r="2.5" fill="#8A4FFF"/>
    </svg>
  );
  if (id === 'mail') return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
      <defs><linearGradient id="mg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2D7FF9"/><stop offset="100%" stopColor="#38BDF8"/></linearGradient></defs>
      <rect x="4" y="10" width="40" height="28" rx="6" fill="url(#mg)" opacity="0.12"/>
      <rect x="4" y="10" width="40" height="28" rx="6" stroke="url(#mg)" strokeWidth="2.5" fill="none"/>
      <path d="M4 14L24 26L44 14" stroke="#2D7FF9" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M36 18L40 14" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 22L42 18" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (id === 'resume') return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
      <defs><linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8A4FFF"/><stop offset="100%" stopColor="#C084FC"/></linearGradient></defs>
      <rect x="10" y="4" width="28" height="40" rx="4" fill="url(#rg)" opacity="0.12"/>
      <rect x="10" y="4" width="28" height="40" rx="4" stroke="url(#rg)" strokeWidth="2.5" fill="none"/>
      <line x1="16" y1="14" x2="32" y2="14" stroke="#8A4FFF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="20" x2="28" y2="20" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="26" x2="30" y2="26" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 32L35.5 35L38 34L35.5 36.5L36 40L34 37.5L32 40L32.5 36.5L30 34L32.5 35L34 32Z" fill="#C084FC"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
      <defs><linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF8B3D"/><stop offset="100%" stopColor="#FBBF24"/></linearGradient></defs>
      <path d="M16 12C16 12 14 20 14 28C14 36 20 42 24 42C28 42 34 36 34 28C34 20 32 12 32 12" fill="url(#sg)" opacity="0.15"/>
      <path d="M16 12C16 12 14 20 14 28C14 36 20 42 24 42C28 42 34 36 34 28C34 20 32 12 32 12" stroke="url(#sg)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M18 28C20 26 28 26 30 28" stroke="#FF8B3D" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <circle cx="24" cy="8" r="2" fill="#FF8B3D"/>
    </svg>
  );
}

function ExperimentCard({ experiment, index }: { experiment: typeof experiments[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="card-spotlight bg-white rounded-3xl p-8 shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 cursor-default group h-full"
    >
      <div className="relative z-10">
        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border mb-6 ${experiment.badgeColor}`}>
          {experiment.badge}
        </span>
        <div className="mb-5 transition-transform duration-500 group-hover:scale-110">
          <CardIcon id={experiment.iconId} />
        </div>
        <h3 className="text-xl font-bold text-[#1F2937] mb-3">{experiment.title}</h3>
        <p className="text-[#6B7280] text-base leading-relaxed mb-6">{experiment.description}</p>
        {experiment.link ? (
          <a href={experiment.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D7FF9] hover:text-[#1A6FE8] transition-colors">
            Visit →
          </a>
        ) : (
          <span className="text-sm font-medium text-[#9CA3AF]">Coming soon</span>
        )}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="experiments" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M9 3L10.5 7.5L15 6L12 10L15 14L10.5 12.5L9 17L7.5 12.5L3 14L6 10L3 6L7.5 7.5L9 3Z" fill="url(#sg2)"/>
              <defs><linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF8B3D"/><stop offset="50%" stopColor="#2D7FF9"/><stop offset="100%" stopColor="#8A4FFF"/></linearGradient></defs>
            </svg>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#6B7280]">Latest Experiments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
            Built in the Lab, <span className="gradient-text">made for everyone.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2"><ExperimentCard experiment={experiments[0]} index={0} /></div>
          <div className="md:col-span-1"><ExperimentCard experiment={experiments[1]} index={1} /></div>
          <div className="md:col-span-1"><ExperimentCard experiment={experiments[2]} index={2} /></div>
          <div className="md:col-span-2"><ExperimentCard experiment={experiments[3]} index={3} /></div>
        </div>
      </div>
    </section>
  );
}
