import Reveal from './Reveal.jsx';
import GlowCard from './GlowCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { FACTS } from '../data/content.js';

export default function Facts() {
  return (
    <section id="facts" className="section">
      <div className="container">
        <SectionHeader eyebrow="05 — Interesting Facts" title="Beyond the headlines." />
        <div className="facts">
          {FACTS.map((f, i) => (
            <Reveal key={f.n} delay={(i % 3) * 100}>
              <GlowCard className="fact-tile">
                <span className="fact-tile__n">{f.n}</span>
                <h3>{f.title}</h3><p>{f.text}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
