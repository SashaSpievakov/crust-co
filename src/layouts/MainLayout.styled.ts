import styled from 'styled-components';

const Main = styled.main`
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;

export { Main };
