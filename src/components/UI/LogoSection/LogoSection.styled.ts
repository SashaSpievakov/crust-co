import styled from "styled-components";

const Logo = styled.section`
  display: flex;

  img {
    margin-right: 15px;
  }

  p {
    color: #7b7b7b;
  }

  @media screen and (max-width: 400px) {
    img {
      height: 76px;
    }

    p {
      max-width: 190px;
    }
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.third};
  font-size: 24px;
  letter-spacing: 1%;
  text-transform: uppercase;
  font-weight: 800;
`;

export { Logo, Heading };
