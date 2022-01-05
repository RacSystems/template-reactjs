import { ButtonHTMLAttributes } from 'react';

import { Container, IContainerProps } from './styles';

interface IButtonProps
  extends IContainerProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

const ComponentButton: React.FC<IButtonProps> = ({
  backgroundColor,
  borderColor,
  borderRadius,
  children,
  color,
  height,
  isDisabled,
  width,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      color={color}
      disabled={isDisabled}
      height={height}
      width={width}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ComponentButton;
