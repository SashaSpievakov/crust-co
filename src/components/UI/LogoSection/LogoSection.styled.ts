import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface CustomLinkProps {
  ishome: string | null;
}

const CustomLink = styled(Link)<CustomLinkProps>`
  border-radius: 5px;

  &:focus {
    outline: 4px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 10px;
  }

  ${({ ishome }) =>
    ishome &&
    css`
      cursor: default;

      &:focus {
        outline: none;
      }
    `}
`;

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

export { CustomLink, Logo, Heading };
