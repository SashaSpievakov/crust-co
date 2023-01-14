import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100vw - 70px);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.fourth};
  margin: 35px auto;
  border-radius: 10px;
  max-width: 1400px;

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

  @media screen and (max-width: 550px) {
    padding: 25px 0 0;
  }
`;

const Title = styled.h2`
  margin: 35px 0;

  @media screen and (max-width: 650px) {
    margin: 20px 0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 15px;
  }
`;

const Block = styled(Top)`
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Error = styled.div`
  margin: 80px auto;
  width: 600px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 22px;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export { Wrapper, Main, Title, Top, Block, Error, Container };
