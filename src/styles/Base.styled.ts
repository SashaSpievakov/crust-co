import styled from 'styled-components';

const Container = styled.article`
  width: 90%;
  margin: 0 auto;
`;

const ErrorParagraph = styled.p`
  font-size: 26px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
    padding: 0 15px;
  }

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

export { Container, ErrorParagraph };
