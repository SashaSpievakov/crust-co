import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface CustomLinkProps {
  ishome: string | null;
}

const CustomLink = styled(Link)<CustomLinkProps>`
  border-radius: 5px;

  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 10px;
  }

  ${({ ishome }) =>
    ishome &&
    css`
      cursor: default;

      &:focus-visible {
        outline: none;
      }
    `}
`;

const Logo = styled.section`
  display: flex;

  img {
    margin-right: 15px;
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

const SubHeading = styled.p`
  color: ${({ theme }) => theme.colors.grayReverse};

  @media screen and (max-width: 400px) {
    max-width: 190px;
  }
`;

export { CustomLink, Logo, Heading, SubHeading };
