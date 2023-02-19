import styled from 'styled-components';

const Title = styled.h2`
  margin: 35px 0;

  @media screen and (max-width: 650px) {
    margin: 20px 0;
  }
`;

const Top = styled.section`
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

const ErrorHeading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;

const ErrorParagraph = styled.p`
  font-size: 22px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export { Title, Top, Block, ErrorHeading, ErrorParagraph };
