import styled from 'styled-components';

type LikeButtonProps = {
  hasLiked: boolean;
};

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderHeader};
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
      resize: vertical;
      min-height: 130px;
      outline: none;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 2rem 2rem 2rem;

    form {
      padding: 0.5rem;
    }
  }
`;

export const DivContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const DivContentAdminRoom = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    button {
      font-size: 0.85rem;
    }
  }
`;

export const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 32px 0 24px;

    h1 {
      font-size: 1.4rem;
    }

    span {
      font-size: 0.8rem;
      padding: 0.35rem 0.9rem;
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
    
    button {
      font-size: 0.8rem;
      height: 40px;
      width: 100%;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DivQuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 32px;
`;

export const LikeButton = styled.button<LikeButtonProps>`
  display: flex;
  align-items: flex-end;
  color: ${({ hasLiked }) => (hasLiked ? '#835afd' : '#737380')};
  gap: 8px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  svg path {
    stroke: ${({ hasLiked }) => (hasLiked ? '#835afd' : '#737380')};
  }
`;
