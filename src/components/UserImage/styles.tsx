import styled from 'styled-components';

type DivUserImageProps = {
  applyInDesktop: boolean;
};

const DivUserImabeMobile = styled.div<DivUserImageProps>`
  position: absolute;
  top: 0.6rem;
  left: 52%;

  img {
    width: 24px;
    height: 24px;
    border-radius: 999999px;
  }

  @media (min-width: 1024px) {
    display: ${({ applyInDesktop }) => (applyInDesktop ? 'block' : 'none')};
  }

  @media (max-width: 1024px) {
    left: 1rem;
  }

  @media (min-width: 1600px) {
    left: 51%;
  }

  @media (min-width: 1920px) {
    left: 50.5%;
  }
`;

export default DivUserImabeMobile;
