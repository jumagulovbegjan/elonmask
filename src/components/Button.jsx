export default function Button({ href, children, variant = 'primary', ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant}`} {...rest}>
      <span>{children}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </a>
  );
}
