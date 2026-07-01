import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick }) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease',
    opacity: disabled ? 0.5 : 1,
    letterSpacing: 'var(--ls-wide)',
  };
  const sizes = {
    sm: { padding: '8px 18px', fontSize: '14px' },
    md: { padding: '12px 28px', fontSize: '16px' },
    lg: { padding: '16px 36px', fontSize: '18px' },
  };
  const variants = {
    primary: {
      background: 'var(--brand-gradient-warm)',
      color: 'var(--on-warm)',
      boxShadow: '0 6px 18px rgba(240,138,46,0.35)',
    },
    secondary: {
      background: 'var(--brand-gradient-cool)',
      color: 'var(--on-cool)',
      boxShadow: '0 6px 18px rgba(31,182,166,0.3)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--surface-navy)',
      border: '1.5px solid var(--border-soft)',
      boxShadow: 'none',
    },
    dark: {
      background: 'var(--surface-navy)',
      color: 'var(--text-on-dark)',
      boxShadow: '0 6px 18px rgba(17,24,46,0.3)',
    },
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant] }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {children}
    </button>
  );
}
