/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';

const Section = styled.section`
  margin: 80px auto;
  max-width: 600px;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 25px;

    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777;

    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
  }

  img {
    display: block;
    width: 300px;
    margin: 45px auto 60px;

    @media screen and (max-width: 500px) {
      width: 200px;
      height: 170px;
    }
  }
`;

export { Section };
