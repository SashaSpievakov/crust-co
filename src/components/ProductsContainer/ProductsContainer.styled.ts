/* eslint import/prefer-default-export: 0 */

import styled, { css } from 'styled-components';

interface ContainerProps {
  notFound: boolean;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 100px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    gap: 40px 50px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }

  ${({ notFound }) =>
    notFound &&
    css`
      grid-template-columns: 1fr;

      @media (max-width: 1150px) {
        grid-template-columns: 1fr;
      }

      @media (max-width: 550px) {
        margin-bottom: 50px;
      }
    `}
`;

const SearchError = styled.div`
  font-size: 30px;
`;

export { Container, SearchError };
