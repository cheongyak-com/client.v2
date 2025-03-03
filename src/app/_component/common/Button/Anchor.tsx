import Link from 'next/link';
import { parseDataValue } from './_util';
import styles from './_.module.css';
import { AnchorProps } from './_type';

export const Anchor = (props: AnchorProps) => {
  const { href, target, children, onClick, ...restProps } = props;
  void onClick;

  return (
    <Link
      className={styles.wrapper}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      {...parseDataValue(restProps)}
    >
      {children}
    </Link>
  );
};
