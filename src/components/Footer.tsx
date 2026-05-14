'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiments = [
  { label: 'GathorChat', href: 'https://chat.gathor.online' },
  { label: 'Mailor', href: 'https://mailor.gathor.online' },
  { label: 'Resume Bot', href: 'https://t.me/resume_analyzer_gathor_bot' },
];

const navigation = [
  { label: 'The Lab', href: '#lab' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Our DNA', href: '#dna' },
];

const connect = [
  { label: 'GitHub', href: 'https://github.com/MayankSharma-ops' },
  { label: 'Contact', href: 'mailto:hello@gathor.online' },
];

/* Simple inline SVG icons */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative overflow-hidden bg-white">
      {/* ── Upper section: CTA + Nav columns ── */}
      <div className="footer-upper">
        <div className="footer-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="footer-grid"
          >
            {/* Left: CTA area */}
            <div className="footer-cta-area">
              <h3 className="footer-cta-heading">
                Stay connected for early access
                <br />
                to our newest tools and updates
              </h3>

              <div className="footer-social-row">
                <a
                  href="https://github.com/MayankSharma-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="mailto:hello@gathor.online"
                  className="footer-social-icon"
                  aria-label="Email"
                >
                  <MailIcon />
                </a>
                <a
                  href="#"
                  className="footer-social-icon"
                  aria-label="X (Twitter)"
                >
                  <XIcon />
                </a>

                <a
                  href="mailto:hello@gathor.online?subject=Subscribe to Gathor Newsletter"
                  className="footer-newsletter-btn"
                >
                  Sign up for our newsletter
                </a>
              </div>
            </div>

            {/* Right: Nav columns */}
            <div className="footer-nav-columns">
              <div className="footer-nav-col">
                <h4 className="footer-nav-label">Navigation</h4>
                <ul className="footer-nav-list">
                  {navigation.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="footer-nav-link">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-nav-col">
                <h4 className="footer-nav-label">Experiments</h4>
                <ul className="footer-nav-list">
                  {experiments.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-nav-link"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-nav-col">
                <h4 className="footer-nav-label">Connect</h4>
                <ul className="footer-nav-list">
                  {connect.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-nav-link"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Giant wordmark ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, type: 'spring', stiffness: 80, damping: 14 }}
        className="footer-wordmark-section"
      >
        <span className="footer-giant-wordmark">Gathor</span>
      </motion.div>

      {/* ── Bottom bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="footer-bottom-bar"
      >
        <div className="footer-container footer-bottom-inner">
          <span className="footer-bottom-brand">Gathor</span>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">About Gathor</a>
            <a href="#experiments" className="footer-bottom-link">Experiments</a>
            <a href="mailto:hello@gathor.online" className="footer-bottom-link">Contact</a>
            <span className="footer-bottom-link footer-bottom-copyright">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
