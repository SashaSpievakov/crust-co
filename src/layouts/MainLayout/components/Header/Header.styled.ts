import { Button } from 'src/styles/Buttons.styled';
import styled, { css } from 'styled-components';

interface HeaderProps {
  isCart: boolean;
}

interface LiProps {
  mode: string;
}

const HeaderWrapper = styled.header<HeaderProps>`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0;

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }

  @media screen and (max-width: 400px) {
    gap: 15px;
  }

  ${({ isCart }) =>
    !isCart &&
    css`
      @media screen and (max-width: 670px) {
        flex-direction: column;
        align-items: start;
        row-gap: 20px;
      }
    `}
`;

const Right = styled.section`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media screen and (max-width: 670px) {
    flex-direction: row-reverse;
  }
`;

const Icon = styled.i<LiProps>`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.third};
  user-select: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 5px;
  }

  ${({ mode }) =>
    mode === 'cart' &&
    css`
      @media screen and (max-width: 450px) {
        position: absolute;
        font-size: 23px;
        top: 15px;
      }
    `}
`;

const ButtonCart = styled(Button)`
  display: flex;
  align-items: center;
  line-height: 23px;
  padding: 12px 25px;

  svg {
    margin-right: 8px;
    margin-bottom: 1px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
  }

  &:focus-visible {
    outline: 5px solid #d5d5d5;
  }
`;

const Delimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;

export { ButtonCart, Delimiter, HeaderWrapper, Icon, Right };
