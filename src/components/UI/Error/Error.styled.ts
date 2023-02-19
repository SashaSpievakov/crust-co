import styled from 'styled-components';

const ErrorMessage = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 550px) {
    font-size: 24px;
    padding-bottom: 25px;
  }
`;

export { ErrorMessage };
