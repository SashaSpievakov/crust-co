/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';

const Container = styled.div`
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
`;

export { Container };
