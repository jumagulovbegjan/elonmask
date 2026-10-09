import Reveal from './Reveal.jsx';
import GlowCard from './GlowCard.jsx';
import CountUp from './CountUp.jsx';
import SectionHeader from './SectionHeader.jsx';
import { TESLA_STATS, TESLA_PILLARS } from '../data/content.js';

export default function Tesla() {
  return (
    <section id="tesla" className="section section--tesla">
      <div className="container">
        <SectionHeader eyebrow="02 — Tesla" title="Accelerating the transition."
          text="Tesla turned the electric car from a compromise into a statement." />
        <div className="stats">
          {TESLA_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <GlowCard className="stat">
                <b><CountUp {...s} /></b>
                <span>{s.label}</span>
              </GlowCard>
            </Reveal>
          ))}
        </div>
        <div className="pillars">
          {TESLA_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="pillar">
              <h3>{p.title}</h3><p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
