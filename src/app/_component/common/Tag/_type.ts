import React from 'react';

export type Props = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'fill' | 'tint';
  color?: 'gray' | 'blue' | 'yellow' | 'red' | 'green';
  children: React.ReactNode;
};
