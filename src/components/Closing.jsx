import Reveal from './Reveal.jsx';

export default function Closing() {
  return (
    <section className="closing">
      <div className="closing__glow" aria-hidden="true" />
      <div className="container">
        <Reveal as="h2">The future belongs to<br />those who build it.</Reveal>
        <Reveal as="p" delay={150}>
          Innovation is not a department, it is a decision. Every rocket landed, every battery
          shipped and every line of code is a vote for a more capable, more sustainable
          tomorrow.
        </Reveal>
        <Reveal delay={300}><a href="#top" className="back-top">Back to top ↑</a></Reveal>
      </div>
      <footer>Unofficial fan-made tribute. Statistics are approximate.</footer>
    </section>
  );
}
