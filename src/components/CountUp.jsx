import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal.js';

export default function CountUp({ value, decimals = 0, suffix = '', format }) {
  const [ref, visible] = useReveal(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let raf; const start = performance.now(), dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);
  const text = format === 'year' ? Math.round(n) : n.toFixed(decimals);
  return <span ref={ref}>{text}{suffix}</span>;
}
