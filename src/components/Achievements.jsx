import { useState } from 'react';
import Reveal from './Reveal.jsx';
import GlowCard from './GlowCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { ACHIEVEMENTS } from '../data/content.js';

export default function Achievements() {
  const [open, setOpen] = useState(0);
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeader eyebrow="04 — Achievements" title="Milestones that moved industries."
          text="Select a card to explore." />
        <div className="achievements">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <GlowCard as="button" type="button"
                className={`achievement ${open === i ? 'is-open' : ''}`}
                aria-expanded={open === i} onClick={() => setOpen(i)}>
                <span className="achievement__icon">{a.icon}</span>
                <h3>{a.title}</h3>
                <p className="achievement__short">{a.short}</p>
                <div className="achievement__detail"><p>{a.detail}</p></div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
