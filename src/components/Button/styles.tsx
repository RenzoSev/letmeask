import styled from 'styled-components';

type ButtonStyledProps = {
  isOutlined: boolean;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ isOutlined }) => (isOutlined ? '#FFF' : '#835afd')};
  border: ${({ isOutlined }) => (isOutlined ? '1px solid #835afd' : 0)};
  color: ${({ isOutlined }) => (isOutlined ? '#835afd' : '#FFF')};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
