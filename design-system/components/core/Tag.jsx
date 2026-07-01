import React from 'react';

export function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--text-primary)',
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand-gradient-warm)', flexShrink: 0 }} />
      {children}
    </span>
  );
}
