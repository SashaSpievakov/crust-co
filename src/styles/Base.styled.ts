import styled from 'styled-components';

const Container = styled.article`
  width: 90%;
  margin: 0 auto;
`;

const ErrorParagraph = styled.p`
  max-width: 900px;
  text-align: center;
  font-size: 26px;
  margin: 0 auto;

  @media screen and (max-width: 550px) {
    font-size: 20px;
    padding: 0 15px;
  }

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

const ModalBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
`;

export { Container, ErrorParagraph, ModalBg };
