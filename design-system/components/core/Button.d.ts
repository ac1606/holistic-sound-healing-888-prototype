import React from 'react';
/**
 * @startingPoint section="Components" subtitle="Primary, secondary, ghost & dark CTA buttons" viewport="700x180"
 */
export interface ButtonProps {
  /** Button label content */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}
