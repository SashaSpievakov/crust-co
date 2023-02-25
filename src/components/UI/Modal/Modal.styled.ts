import styled, { css } from 'styled-components';
import { BsXLg } from 'react-icons/bs';

import { ButtonPay, ButtonBack } from 'src/styles/Buttons.styled';

const mixinArticle = css`
  position: fixed;
  top: 40%;
  left: 50%;
  text-align: center;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -40%);
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
`;

const Bg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
`;

const Aricle = styled.article`
  ${mixinArticle}
  width: 40%;
  height: 95%;
`;

const AricleSubmitted = styled.article`
  ${mixinArticle}
  width: 40%;
  height: 30%;
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-top: 5%;
`;

const SubHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 70%;
  margin: 0 auto 3%;
`;

const Cross = styled(BsXLg)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 25px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const SubHeaderSubmitted = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 60%;
  margin: 2% auto 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2em;
  width: 60%;
  margin: 0 auto;
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
`;

const ModalButton = styled(ButtonPay)`
  margin-top: 5%;
`;

const SubmittedButton = styled(ButtonBack)`
  margin-top: 5%;
`;

export {
  Bg,
  Aricle,
  AricleSubmitted,
  Header,
  SubHeader,
  Cross,
  SubHeaderSubmitted,
  Form,
  Group,
  Label,
  Input,
  ModalButton,
  SubmittedButton,
};
