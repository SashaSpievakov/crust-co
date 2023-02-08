/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';

const Error = styled.h2`
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 550px) {
    font-size: 24px;
    padding-bottom: 25px;
  }
`;

export { Error };
