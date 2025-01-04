import styled from 'styled-components';

const TitleMessage = styled.h1`
  height: 50vh;
  text-align: center;
  margin: 5% 10% 0;
  font-size: 3em;

  @media screen and (max-width: 720px) {
    margin: 10% 10% 0;
    font-size: 2em;
  }

  @media screen and (max-width: 420px) {
    margin: 20% 10% 0;
    font-size: 1.5em;
  }
`;

export { TitleMessage };
