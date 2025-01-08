import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0 50px;

  p {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 60px;
  }
`;

const Title = styled.h2`
  font-size: 60px;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    font-size: 45px;
    padding: 0 15px;
  }

  @media screen and (max-width: 400px) {
    font-size: 35px;
  }
`;

export { Article, Title };
