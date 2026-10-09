import { useState } from 'react';
import Button from './Button.jsx';
import photo from '../assets/img/photo.jpg'
export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="orb orb--red" /><div className="orb orb--blue" /><div className="grid" />
      </div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow hero__rise" style={{ '--d': '0.1s' }}>The Future Is Built</span>
          <h1 className="hero__rise" style={{ '--d': '0.25s' }}>ELON<br />MUSK</h1>
          <p className="hero__role hero__rise" style={{ '--d': '0.4s' }}>CEO <b>•</b> Entrepreneur <b>•</b> Visionary</p>
          <p className="hero__intro hero__rise" style={{ '--d': '0.55s' }}>
            From electric cars to reusable rockets, he builds companies that challenge what
            is considered possible, and make the impossible routine.
          </p>
          <div className="hero__rise" style={{ '--d': '0.7s' }}>
            <Button href="#about">Explore His Journey</Button>
          </div>
        </div>
        <div className="hero__portrait hero__rise" style={{ '--d': '0.4s' }}>
          <div className="hero__frame">
            {imgOk ? (
              <img src={photo} alt="Elon Musk" onError={() => setImgOk(false)} />
            ) : (
              <div className="hero__placeholder"><span>Add portrait</span><small>public/images/elon-musk.jpg</small></div>
            )}
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true"><i /></div>
    </section>
  );
}
