import styled from 'styled-components';

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
      resize: vertical;
      min-height: 130px;
      outline: none;
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
    color: #FFF;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  
  span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835AFD;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;