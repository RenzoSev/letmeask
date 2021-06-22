import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <ButtonStyled  {...props} />
  )
}
