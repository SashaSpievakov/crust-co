import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100vw - 70px);
  max-width: 1400px;
  height: 100%;
  margin: 35px auto;
  background-color: ${({ theme }) => theme.colors.fourth};
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: calc(100vw - 50px);
    margin: 25px auto;
  }

  @media (max-width: 450px) {
    width: calc(100vw - 40px);
    margin: 20px auto;
  }
`;

const Main = styled.main`
  padding: 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: 550px) {
    padding: 25px 0 0;
  }
`;

export { Wrapper, Main };
