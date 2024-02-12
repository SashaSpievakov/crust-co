import { ButtonBack } from 'src/styles/Buttons.styled';
import styled from 'styled-components';

const Aricle = styled.article`
  position: fixed;
  top: 35%;
  left: 50%;
  width: 40rem;
  height: 17rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -35%);
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 720px) {
    width: 30rem;
    height: 15rem;
  }

  @media screen and (max-width: 550px) {
    width: 25rem;
    height: 13rem;
  }

  @media screen and (max-width: 420px) {
    width: 18rem;
  }
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-top: 2rem;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.7rem;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 420px) {
    line-height: 1;
    width: 70%;
    margin: 1.5rem auto 0;
  }
`;

const SubHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 60%;
  margin: 2% auto 0;

  @media screen and (max-width: 720px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
    width: 70%;
    margin: 4% auto 0;
  }
`;

const CloseButton = styled(ButtonBack)`
  margin-top: 5%;

  @media screen and (max-width: 550px) {
    padding: 0.8rem 0.9rem;
  }

  @media screen and (max-width: 420px) {
    padding: 0.6rem 0.7rem;
  }
`;

export { Aricle, CloseButton, Header, SubHeader };
