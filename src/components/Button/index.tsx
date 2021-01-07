import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  width?: number;
  heigth?: number,
  borderRadius?: number,
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = ({
  width = 100,
  heigth = 40,
  borderRadius = 4,
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      width={width}
      heigth={heigth}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };
