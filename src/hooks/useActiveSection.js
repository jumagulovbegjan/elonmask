import { useEffect, useState } from 'react';

/** Tracks which section (by id) is nearest the middle of the viewport. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const onScroll = () => window.scrollY < 200 && setActive('');
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [ids]);
  return active;
}
