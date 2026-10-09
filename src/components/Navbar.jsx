import { useEffect, useState } from 'react';
import { NAV } from '../data/content.js';

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <a href="#top" className="navbar__logo" onClick={() => setOpen(false)}>
        <span className="dot" />MUSK
      </a>
      <button className="navbar__toggle" aria-label="Toggle menu" aria-expanded={open}
        onClick={() => setOpen(!open)}><i /><i /></button>
      <nav className="navbar__links">
        {NAV.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}
            onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
