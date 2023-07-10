import { CSSProperties } from 'react';

export const stickyStyleWithBorder = (index: number): CSSProperties => {
  if (index === 0) {
    return {
      position: 'sticky',
      left: 0,
      zIndex: 1,
      background: '#fff',
    };
  }
  return {};
};
