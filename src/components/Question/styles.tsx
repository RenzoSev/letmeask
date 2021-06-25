import styled from 'styled-components';

type DivUserInfoProps = {
  isHighlighted: boolean;
};

export const DivQuestion = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  padding: 24px;
  transition: filter 0.4s;

  & + .question {
    margin-top: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  &.highlighted {
    background: ${({ theme }) => theme.colors.highlight};
    border: 1px solid #835afd;
  }

  &.answered {
    background: ${({ theme }) => theme.colors.secundary};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }
  }
`;

export const DivUserInfo = styled.div<DivUserInfoProps>`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${(props) => (props.isHighlighted
    ? props.theme.colors.text
    : props.theme.colors.textSecundary)};
    font-size: 14px;
  }
`;
