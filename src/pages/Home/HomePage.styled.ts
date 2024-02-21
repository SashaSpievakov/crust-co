import styled from 'styled-components';

const Title = styled.h2`
  margin: 35px 0;
  font-size: 34px;

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

export { Block, Title, Top };
