import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export default function Button({
  isOutlined = false,
  ...props
}: ButtonProps): JSX.Element {
  return <ButtonStyled isOutlined={isOutlined} {...props} />;
}
