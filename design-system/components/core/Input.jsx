import React from 'react';

export function Input({ label, placeholder, type = 'text' }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        style={{
          padding: '14px 18px',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--border-soft)',
          background: '#FFFFFF',
          fontSize: '16px',
          fontFamily: 'var(--font-body)',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      />
    </label>
  );
}
