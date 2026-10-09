import Reveal from './Reveal.jsx';

export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <Reveal className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
