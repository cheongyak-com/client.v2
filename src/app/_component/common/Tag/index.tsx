import { parseDataValue } from '../_util';
import styles from './_.module.css';
import { Props } from './_type';

export const Tag = (props: Props) => {
  const { variant = 'tint', size = 'small', color = 'gray', children } = props;

  return (
    <div className={styles.wrapper} {...parseDataValue({ variant, size, color })}>
      {children}
    </div>
  );
};
