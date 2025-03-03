import { Props } from './_type';
import { isAnchor } from './_util';
import { Anchor } from './Anchor';
import { ContainerButton } from './ContainerButton';

export const Button = (props: Props) => {
  const { variant = 'primary' } = props;

  return isAnchor(props) ? <Anchor {...props} variant={variant} /> : <ContainerButton {...props} variant={variant} />;
};
