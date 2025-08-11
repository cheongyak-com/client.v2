import React from 'react';
import { UrlObject } from 'url';

export type Common = {
  shape?: 'icon' | 'text';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error';
  disabled?: boolean;
  children: React.ReactNode;
};

export type AnchorProps = Common & {
  as?: 'a';
  href: string | UrlObject;
  target?: React.HTMLAttributeAnchorTarget;

  onClick?: never;
};

export type ButtonProps = Common & {
  as?: 'button';
  onClick: () => void;

  href?: never;
  target?: never;
};

export type Props = AnchorProps | ButtonProps;
