'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function DNA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="dna"
      ref={ref}
      className="relative overflow-hidden fluid-section-padding"
      style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)' }}
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/50 to-orange-50/30" />

      {/* Subtle decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 'clamp(250px, 30vw, 400px)',
            height: 'clamp(250px, 30vw, 400px)',
            background: 'radial-gradient(circle, rgba(45,127,249,0.3) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: 'clamp(200px, 22vw, 300px)',
            height: 'clamp(200px, 22vw, 300px)',
            background: 'radial-gradient(circle, rgba(138,79,255,0.3) 0%, transparent 70%)',
            bottom: '10%',
            left: '10%',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 fluid-container-narrow text-center">
        {/* Quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="font-serif text-[#2D7FF9] leading-none select-none"
          style={{
            fontSize: 'clamp(80px, 12vw, 180px)',
            marginBottom: 'clamp(-40px, -6vw, -90px)',
          }}
        >
          &ldquo;
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.15 }}
          className="fluid-dna-heading text-[#1F2937] mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Great tools shouldn&apos;t be a luxury.
          <br />
          <span className="gradient-text">We build for everyone.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-12 h-[2px] rounded-full gradient-bg mb-2" />
          <p className="text-[#6B7280] fluid-body">
            Designed and engineered by a solo creator. Built for the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
