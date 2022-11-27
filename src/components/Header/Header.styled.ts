import styled, { css } from "styled-components";

import { Container } from "../../styles/Base.styled";

interface WrapperProps {
  isCart: boolean;
}

const Main = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 40px 0;

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;

const Wrapper = styled(Container)<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ isCart }) =>
    !isCart &&
    css`
      @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: start;
        row-gap: 20px;
      }
    `}
`;

const Logo = styled.section`
  display: flex;

  img {
    margin-right: 15px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.third};
    font-size: 24px;
    letter-spacing: 1%;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    color: #7b7b7b;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media screen and (max-width: 550px) {
    flex-direction: row-reverse;
  }
`;

const Icon = styled.i`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.third};
  cursor: pointer;
`;

const Delimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;

export { Main, Wrapper, Logo, Right, Icon, Delimiter };
