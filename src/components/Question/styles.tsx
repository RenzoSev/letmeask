import styled from 'styled-components';

export const DivQuestion = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }
`;

export const DivUserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #737380;
    font-size: 14px;
  }
`;
