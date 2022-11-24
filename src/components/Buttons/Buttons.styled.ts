import styled, {css} from "styled-components";

interface CircleProps {
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
  border: 1px solid transparent;

  &,
  span {
    color: ${({theme}) => theme.colors.fourth};
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
  background-color: ${({theme}) => theme.colors.third};

  &:hover,
  &:active {
    background-color: ${({theme}) => theme.colors.gray};
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
  background-color: ${({theme}) => theme.colors.gray};

  &,
  span {
    color: ${({theme}) => theme.colors.black};
  }

  svg {
    path {
      fill: ${({theme}) => theme.colors.black};
    }
  }

  &:hover {
    background-color:${({theme}) => theme.colors.secondary};

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
  font-size: 11px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  border-width: 2px;

  &:disabled {
    cursor: auto;
    background-color: ${({theme}) => theme.colors.gray};

    svg path {
      fill: #dddddd;
      stroke: #dddddd;
    }
  }

  ${({remove}) => remove && css`
    svg {
      transform: rotate(45deg);

      path {
        fill: #dddddd;
        stroke: #dddddd;
      }
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.black};
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
`

const ButtonBack = styled(ButtonAdd)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;

  span {
    color: #c3c3c3;
    font-weight: 500;
    font-weight: 600;
  }

  svg {
    margin-right: 12px;

    path {
      fill: ${({theme}) => theme.colors.gray};
      stroke-width: 2;
    }
  }

  &:hover {
    background-color: #111111;
    border-color: #111111;

    span {
      color: ${({theme}) => theme.colors.gray};
    }

    svg > path {
      fill: #111111;
    }
  }
`

export {ButtonBlack, ButtonCart, ButtonPay, ButtonCircle, ButtonAdd, ButtonBack}