import styled from 'styled-components';
import { BsXLg } from 'react-icons/bs';

import { ButtonPay } from 'src/styles/Buttons.styled';

const Aricle = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 35rem;
  height: 47rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 720px) {
    width: 30rem;
    height: 40rem;
  }

  @media screen and (max-width: 550px) {
    width: 25rem;
    height: 38rem;
  }

  @media screen and (max-width: 420px) {
    width: 18rem;
    height: 36rem;
  }
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.7rem;
    margin-top: 1rem;
  }
`;

const SubHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 70%;
  margin: 0 auto 3%;

  @media screen and (max-width: 720px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
  }

  @media screen and (max-width: 420px) {
    width: 85%;
    font-size: 1rem;
  }
`;

const Cross = styled(BsXLg)`
  position: absolute;
  top: 15px;
  right: 15px;
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
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    row-gap: 1.5em;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
    row-gap: 1.3em;
  }

  @media screen and (max-width: 420px) {
    width: 85%;
    row-gap: 1.1em;
  }
`;

const Group = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
`;

const Label = styled.label`
  font-size: 1.3em;
  font-weight: 700;

  @media screen and (max-width: 720px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  font-size: 1.2em;
  width: 100%;
  padding: 0.5em 0.7em;
  color: ${({ theme }) => theme.colors.third};
  background-color: ${({ theme }) => theme.colors.gray};
  border: 3px solid ${({ theme }) => theme.colors.secondaryTransparent};
  border-radius: 10px;

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (max-width: 720px) {
    padding: 0.3em 0.5em;
  }
`;

const ModalButton = styled(ButtonPay)`
  margin-top: 1rem;

  @media screen and (max-width: 550px) {
    padding: 0.8rem 1rem;
  }
`;

export {
  Aricle,
  Header,
  SubHeader,
  Cross,
  Form,
  Group,
  Label,
  Input,
  ModalButton,
};
