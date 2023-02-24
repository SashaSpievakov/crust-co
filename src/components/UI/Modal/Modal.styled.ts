import styled from 'styled-components';

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
  position: fixed;
  top: 40%;
  left: 50%;
  text-align: center;
  width: 60%;
  height: 70%;
  background: ${({ theme }) => theme.colors.fourth};
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
`;

const Header = styled.h3`
  font-size: 2.5rem;
  margin-top: 7%;
`;

const SubHeader = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  width: 70%;
  margin: 0 auto 3%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  width: 70%;
  margin: 0 auto;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Label = styled.label`
  font-size: 1.3em;
  font-weight: 700;
`;

const Input = styled.input`
  font-size: 1.2em;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.third};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  border: none;
`;

export { Bg, Aricle, Header, SubHeader, Form, Group, Label, Input };
