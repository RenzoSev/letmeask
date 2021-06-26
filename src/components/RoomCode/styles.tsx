import styled from 'styled-components';

const ButtonRoomCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;

  div {
    background: #835afd;
    height: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export default ButtonRoomCode;
