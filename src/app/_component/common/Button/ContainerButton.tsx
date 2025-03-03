import { parseDataValue } from './_util';
import styles from './_.module.css';
import { ButtonProps } from './_type';

export const ContainerButton = (props: ButtonProps) => {
  const { onClick, disabled, href, target, children, ...restProps } = props;
  void href;
  void target;

  return (
    <button className={styles.wrapper} onClick={onClick} disabled={disabled} {...parseDataValue(restProps)}>
      {children}
    </button>
  );
};
