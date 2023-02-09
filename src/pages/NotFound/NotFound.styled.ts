import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;

  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  text-align: center;
  padding: 150px 0;

  @media screen and (max-width: 900px) {
    font-size: 50px;
    padding: 100px 0;
  }

  @media screen and (max-width: 650px) {
    font-size: 35px;
    padding: 50px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 40px 0;
  }
`;

export { Title, Wrapper };
