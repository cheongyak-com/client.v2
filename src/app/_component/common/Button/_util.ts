import { AnchorProps, Props } from './_type';

export const isAnchor = (props: Props): props is AnchorProps => {
  return props.as === 'a' || !!props.href;
};
