import styled from 'styled-components';

const DivUserImabeMobile = styled.div`
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 999999px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default DivUserImabeMobile;
