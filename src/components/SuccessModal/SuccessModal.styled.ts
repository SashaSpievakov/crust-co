import styled from 'styled-components';

import { ButtonBack } from 'src/styles/Buttons.styled';

const Aricle = styled.article`
  position: fixed;
  top: 40%;
  left: 50%;
  width: 40%;
  height: 30%;
  text-align: center;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -40%);
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 900px) {
    width: 70%;
    height: 40%;
  }

  @media screen and (max-width: 500px) {
    top: 35%;
    width: 80%;
    transform: translate(-50%, -35%);
  }
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-top: 5%;

  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`;

const SubHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 60%;
  margin: 2% auto 0;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

const CloseButton = styled(ButtonBack)`
  margin-top: 5%;
`;

export { Aricle, Header, SubHeader, CloseButton };
