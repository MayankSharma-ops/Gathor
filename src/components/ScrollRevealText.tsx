'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PREFIX = 'We build';
const ITEMS = ['ideas', 'platforms', 'communities'];
const INACTIVE_OPACITY = 0.15;

export default function ScrollRevealText() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={sectionRef} className="scroll-reveal-outer">
      {/* Sticky viewport — stays pinned while the tall container scrolls */}
      <div className="scroll-reveal-sticky">
        <div className="scroll-reveal-content">
          {/* Static prefix */}
          <h2 className="scroll-reveal-prefix">{PREFIX}</h2>

          {/* Vertical word list */}
          <ul className="scroll-reveal-list">
            {ITEMS.map((item, i) => (
              <WordItem
                key={item}
                word={item}
                index={i}
                total={ITEMS.length}
                progress={scrollYProgress}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WordItem({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Each word occupies an equal slice of the scroll range
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const mid = start + segmentSize * 0.5;
  const end = start + segmentSize;

  // Spotlight: fade in → full → fade out
  // First item starts visible, last item stays visible
  const opacity = useTransform(
    progress,
    isFirst && isLast
      ? [0, 1]
      : isFirst
        ? [start, mid, end]
        : isLast
          ? [start, mid]
          : [start, mid, end],
    isFirst && isLast
      ? [1, 1]
      : isFirst
        ? [1, 1, INACTIVE_OPACITY]
        : isLast
          ? [INACTIVE_OPACITY, 1]
          : [INACTIVE_OPACITY, 1, INACTIVE_OPACITY],
  );

  return (
    <motion.li className="scroll-reveal-item" style={{ opacity }}>
      {word}
    </motion.li>
  );
}
