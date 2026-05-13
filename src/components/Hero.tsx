'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      delay: 0.3 + i * 0.12,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
      style={{ padding: 'clamp(6rem, 10vw, 8rem) clamp(1rem, 3vw, 1.5rem) clamp(3rem, 6vw, 5rem)' }}
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue orb */}
        <div
          className="orb-1 absolute rounded-full opacity-30"
          style={{
            width: 'clamp(300px, 50vw, 700px)',
            height: 'clamp(300px, 50vw, 700px)',
            background: 'radial-gradient(circle, rgba(45,127,249,0.4) 0%, transparent 70%)',
            top: '-10%',
            right: '-5%',
            filter: 'blur(80px)',
          }}
        />
        {/* Orange orb */}
        <div
          className="orb-2 absolute rounded-full opacity-25"
          style={{
            width: 'clamp(250px, 40vw, 600px)',
            height: 'clamp(250px, 40vw, 600px)',
            background: 'radial-gradient(circle, rgba(255,139,61,0.45) 0%, transparent 70%)',
            bottom: '5%',
            left: '-10%',
            filter: 'blur(80px)',
          }}
        />
        {/* Purple orb */}
        <div
          className="orb-3 absolute rounded-full opacity-25"
          style={{
            width: 'clamp(280px, 45vw, 650px)',
            height: 'clamp(280px, 45vw, 650px)',
            background: 'radial-gradient(circle, rgba(138,79,255,0.35) 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center fluid-container-narrow">
        {/* Pill badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm mb-8 fluid-pill"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="font-medium text-[#6B7280]" style={{ fontSize: 'inherit' }}>Now open for experiments</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="fluid-hero-heading mb-8"
        >
          <span className="text-[#1F2937]">Where All People </span>
          <span className="gradient-text">Gather.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="fluid-body text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Welcome to the Gathor Lab. We are an experimental product studio building tools
          that solve real human problems — without paywalls, without noise. This is our sandbox.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-row items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#experiments"
            className="group inline-flex items-center gap-2 bg-[#1F2937] text-white font-semibold rounded-full hover:scale-105 hover:bg-[#111827] transition-all duration-300 shadow-lg shadow-black/10 fluid-cta"
          >
            View Our Experiments
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#dna"
            className="inline-flex items-center gap-2 bg-transparent text-[#1F2937] font-semibold rounded-full border-2 border-[#E5E7EB] hover:border-[#D1D5DB] hover:scale-105 hover:bg-white/50 transition-all duration-300 fluid-cta"
          >
            Read the Manifesto
          </a>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-[#D1D5DB] flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
