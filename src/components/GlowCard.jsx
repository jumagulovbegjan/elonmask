/** Glass card with a cursor-following spotlight. */
export default function GlowCard({ as: Tag = 'div', className = '', children, ...rest }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
  };
  return <Tag className={`glow-card ${className}`} onMouseMove={move} {...rest}>{children}</Tag>;
}
