import { BsXLg } from 'react-icons/bs';
import { ButtonPay } from 'src/styles/Buttons.styled';
import styled from 'styled-components';

const Aricle = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 30px 20px 40px;
  text-align: center;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 720px) {
    padding: 25px 20px 30px;
  }

  @media screen and (max-width: 550px) {
    padding: 15px 20px 20px;
  }
`;

const Header = styled.h3`
  font-size: 2.5rem;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.7rem;
  }
`;

const SubHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 400px;
  margin: 0 80px 10px;

  @media screen and (max-width: 720px) {
    font-size: 1.15rem;
    width: 350px;
    margin: 0 30px 10px;
  }

  @media screen and (max-width: 420px) {
    width: 260px;
    margin: 0 auto 10px;
    font-size: 1rem;
  }
`;

const Cross = styled(BsXLg)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 25px;
  opacity: 0.3;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.third};
    outline-offset: 3px;
  }

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2em;
  margin: 0 80px;
  width: 400px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    row-gap: 1.5em;
    width: 350px;
    margin: 0 30px;
  }

  @media screen and (max-width: 550px) {
    row-gap: 1.3em;
  }

  @media screen and (max-width: 420px) {
    width: 260px;
    margin: 0 auto;
    row-gap: 1.1em;
  }
`;

const ModalButton = styled(ButtonPay)`
  margin-top: 1rem;

  @media screen and (max-width: 550px) {
    padding: 0.8rem 0.9rem;
  }

  @media screen and (max-width: 420px) {
    padding: 0.6rem 0.7rem;
  }
`;

export { Aricle, Cross, Form, Header, ModalButton, SubHeader };
