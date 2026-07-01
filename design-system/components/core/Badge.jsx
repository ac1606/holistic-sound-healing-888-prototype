import React from 'react';

export function Badge({ children, tone = 'warm' }) {
  const tones = {
    warm: { background: 'rgba(240,138,46,0.14)', color: '#E0741A' },
    cool: { background: 'rgba(31,182,166,0.14)', color: '#0F9485' },
    navy: { background: 'rgba(26,37,71,0.08)', color: 'var(--surface-navy)' },
  };
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wide)',
      ...tones[tone],
    }}>
      {children}
    </span>
  );
}
