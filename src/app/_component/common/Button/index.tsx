import { Props } from './_type';
import { isAnchor } from './_util';
import { Anchor } from './Anchor';
import { ContainerButton } from './ContainerButton';

export const Button = (props: Props) => {
  const { variant = 'primary', size = 'medium', shape = 'text' } = props;

  const commonProps = {
    variant,
    size,
    shape,
  };

  return isAnchor(props) ? <Anchor {...props} {...commonProps} /> : <ContainerButton {...props} {...commonProps} />;
};
