/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

import React, { ButtonHTMLAttributes } from 'react';
import ButtonStyled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export default function Button({ isOutlined = false, ...props }: ButtonProps) {
  return <ButtonStyled isOutlined={isOutlined} {...props} />;
}
