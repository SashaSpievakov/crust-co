import styled, { css } from 'styled-components';

interface CircleProps {
  remove?: boolean;
}

interface ButtonTertiaryProps {
  isFullScreen?: boolean;
}

const Button = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;

  &,
  span {
    color: #fff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
  }

  &:focus-visible {
    outline: 5px solid ${({ theme }) => theme.colors.third};
    outline-offset: -5px;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ButtonMedium = styled(Button)`
  font-size: 18px;
  font-weight: 600;
  width: 210px;
  padding: 16px;

  &:focus-visible {
    outline: 5px solid #d5d5d5;
  }
`;

const ButtonSecondary = styled(Button)`
  padding: 12px 0 14px;
  width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.fourth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.third};
  }

  &:focus-visible {
    outline: 5px solid ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (max-width: 400px) {
    width: 200px;
    padding: 10px 0 12px;
  }
`;

const ButtonOutline = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    opacity: 1;
  }
`;

const ButtonCircle = styled(ButtonOutline)<CircleProps>`
  display: flex;
  font-size: 11px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  border-width: 2px;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.third};
    outline-offset: -3px;
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.disabled};

    svg path {
      fill: #dddddd;
      stroke: #dddddd;
    }
  }

  svg path {
    fill: ${({ theme }) => theme.colors.third};
    stroke: ${({ theme }) => theme.colors.third};
  }

  ${({ remove }) =>
    remove &&
    css`
      svg {
        transform: rotate(45deg);
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};

        svg path {
          fill: #fff;
          stroke: #fff;
        }
      }
    `}
`;

const ButtonTertiary = styled(ButtonOutline)<ButtonTertiaryProps>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.third};

  span {
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.third};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.third};
  }

  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      margin-bottom: 50px;
      padding: 15px 40px;

      @media screen and (max-width: 400px) {
        margin-bottom: 40px;
        padding: 13px 30px;
      }
    `}
`;

export { Button, ButtonCircle, ButtonMedium, ButtonSecondary, ButtonTertiary };
