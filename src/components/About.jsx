import Reveal from './Reveal.jsx';
import GlowCard from './GlowCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { ABOUT_CARDS } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <SectionHeader eyebrow="01 — About" title="Engineer at heart. Builder by obsession." />
          <Reveal delay={120} as="p" className="lead">
            Born in Pretoria, South Africa, Elon Musk taught himself programming as a boy and
            left for North America as a teenager. After selling his first companies, he
            reinvested nearly everything into two high-risk industries, rockets and electric
            cars, when most experts said both would fail.
          </Reveal>
          <Reveal delay={200} as="p" className="muted">
            His approach is simple to describe and hard to copy: define a huge problem, strip it
            to physical fundamentals, and iterate relentlessly.
          </Reveal>
        </div>
        <div className="about__cards">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <GlowCard className="fact">
                <span className="fact__label">{c.label}</span>
                <strong>{c.value}</strong>
                <small>{c.note}</small>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
