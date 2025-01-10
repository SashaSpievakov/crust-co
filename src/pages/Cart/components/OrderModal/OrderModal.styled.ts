import { ButtonMedium, ButtonSecondary } from 'src/styles/Buttons.styled';
import styled from 'styled-components';

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

const ModalButton = styled(ButtonMedium)`
  margin-top: 1rem;

  @media screen and (max-width: 550px) {
    padding: 0.8rem 0.9rem;
  }

  @media screen and (max-width: 420px) {
    padding: 0.6rem 0.7rem;
  }
`;

const CloseButton = styled(ButtonSecondary)`
  margin-top: 5%;

  @media screen and (max-width: 550px) {
    padding: 0.8rem 0.9rem;
  }

  @media screen and (max-width: 420px) {
    padding: 0.6rem 0.7rem;
  }
`;

export { CloseButton, Form, ModalButton };
