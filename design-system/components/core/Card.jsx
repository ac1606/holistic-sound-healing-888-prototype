import React from 'react';

export function Card({ children, padding = '32px' }) {
  return (
    <div style={{
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding,
    }}>
      {children}
    </div>
  );
}
