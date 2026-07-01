import React from 'react';

export function Avatar({ src, alt = '', size = 96 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--border-soft)',
      flexShrink: 0,
    }}>
      {src && <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
    </div>
  );
}
