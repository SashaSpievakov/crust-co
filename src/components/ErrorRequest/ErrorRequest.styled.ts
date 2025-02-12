import styled from 'styled-components';

import { Container } from '@src/styles/Base.styled';

const Article = styled(Container)`
  margin: 100px auto;
  text-align: center;
`;

const ErrorHeading = styled.h2`
  font-size: 45px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 5px;

  @media screen and (max-width: 550px) {
    font-size: 30px;
    padding: 0 15px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 450px) {
    font-size: 26px;
  }
`;

export { Article, ErrorHeading };
