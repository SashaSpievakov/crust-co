import styled, {css} from "styled-components";

interface CircleProps {
  minus?: boolean
  remove?: boolean
}

const Button = styled.button`
  display: inline-block;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color ${({theme}) => theme.duration} ease-in-out, border-color ${({theme}) => theme.duration} ease-in-out;
  border: 1px solid transparent;

  &,
  span {
    color: #fff;
  }

  i,
  span,
  path,
  svg {
    transition: all ${({theme}) => theme.duration} ease-in-out;
  }

  &:hover {
    background-color: darken(${({theme}) => theme.colors.primary}, 8%);
  }

  &:active {
    background-color: darken(${({theme}) => theme.colors.primary}, 12%);
    transform: translateY(1px);
  }
`

const ButtonBlack = styled(Button)`
  padding: 12px 0 14px;
  width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  background-color: ${({theme}) => theme.colors.black};

  &:hover,
  &:active {
    background-color: lighten(${({theme}) => theme.colors.black}, 10);
  }
`

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
`

const ButtonPay = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  width: 210px;
  padding: 16px;
`

const ButtonOutline = styled(Button)`
  background-color: #fff;
  border-color: ${({theme}) => theme.colors.primary};

  &,
  span {
    color: ${({theme}) => theme.colors.primary};
  }

  svg {
    path {
      fill: ${({theme}) => theme.colors.primary};
    }
  }

  &:hover {
    background-color:${({theme}) => theme.colors.primary};

    &,
    span {
      color: #fff;
    }

    svg {
      path {
        fill: #fff;
      }
    }
  }

  &:active {
    background-color: darken(${({theme}) => theme.colors.primary}, 8%);
  }
`

const ButtonCircle = styled(ButtonOutline)<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  border-width: 2px;

  &:disabled {
    border-color: #dddddd;
    cursor: auto;
    background-color: #fff;

    svg path {
      fill: #dddddd;
    }
  }

  ${({minus}) => minus && css`
    svg {
      path:first-of-type {
        display: none;
      }
    }
  `}

  ${({remove}) => remove && css`
  border-color: #ddddde;

  svg {
    width: 11.5px;
    height: 11.5px;
    position: relative;
    transform: rotate(45deg);

    path {
      fill: #d0d0d0;
    }
  }

  &:hover,
  &:active {
    border-color: #2a2a2a;
    background-color: #2a2a2a;
  }
  `}
`

const ButtonAdd = styled(ButtonOutline)`
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 18px;
  }

  i {
    display: inline-block;
    border-radius: 30px;
    background-color: ${({theme}) => theme.colors.primary};
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
  }

  &:hover {
    i {
      background-color: #fff;
      color: $orange;
    }
  }
`

const ButtonBack = styled(ButtonAdd)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  border-color: #dddddd;

  span {
    color: #c3c3c3;
    font-weight: 500;
    font-weight: 600;
  }

  &:hover {
    background-color: #111111;
    border-color: #111111;

    span {
      color: ${({theme}) => theme.colors.gray};
    }
  }

  svg {
    margin-right: 12px;

    path {
      fill: transparent;
      stroke-width: 2;
    }
  }
`

export {ButtonBlack, ButtonCart, ButtonPay, ButtonCircle, ButtonAdd, ButtonBack}