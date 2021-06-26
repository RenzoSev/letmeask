import styled from 'styled-components';

const ButtonChangeTheme = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 1rem;

  background: none;
  border: none;

  color: #835afd;

  transition: filter 0.2s;

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export default ButtonChangeTheme;
