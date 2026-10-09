import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { CAREER } from '../data/content.js';

export default function Career() {
  return (
    <section id="career" className="section">
      <div className="container">
        <SectionHeader eyebrow="03 — Career" title="Three decades. One direction." />
        <ol className="timeline">
          {CAREER.map((c, i) => (
            <Reveal as="li" key={c.year} className={`timeline__item ${i % 2 ? 'is-right' : ''}`}>
              <span className="timeline__year">{c.year}</span>
              <div className="timeline__body glass">
                <h3>{c.title}</h3><p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
