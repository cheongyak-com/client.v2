import React from 'react';
import { pathToThemeColor } from '@/theme/util';
import { parseDataValue } from '../_util';
import styles from './_.module.css';
import { Props } from './_type';

export const Divider = (props: Props) => {
  const { orientation = 'vertical', thickness = '1px', length = '100%', color = 'gray.300', margin = '0' } = props;

  const customStyles = {
    '--divider-thickness': thickness,
    '--divider-length': length,
    '--divider-color': pathToThemeColor(color),
    '--divider-margin': margin,
  } as React.CSSProperties;

  return <hr className={styles.wrapper} style={customStyles} {...parseDataValue({ orientation })} />;
};
