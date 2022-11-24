import styled, { css } from "styled-components";
import { BsCaretDownFill, BsCaretUpFill} from 'react-icons/bs';

interface LiProps {
  chosen: boolean
}

const mixinArrow = css`
  font-size: 15px;
  margin-right: 5px;
`

const mixinBackground = css`
  background-color: ${({theme}) => theme.colors.secondaryTransparent};
`

const Wrapper = styled.div`
  position: relative;
  margin-top: 15px;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    align-self: end;
  }
`

const Label = styled.div`
  display: flex;
  align-items: center;

  b {
    margin-right: 8px;
  }

  span {
    color: ${({theme}) => theme.colors.primary};
    border-bottom: 1px dashed ${({theme}) => theme.colors.primary};
  }
`

const ArrowUp = styled(BsCaretUpFill)`
  ${mixinArrow}
`

const ArrowDown = styled(BsCaretDownFill)`
  ${mixinArrow}
`

const Popup = styled.div`
  position: absolute;
  right: -5px;
  margin-top: 15px;
  background: ${({theme}) => theme.colors.fourth};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
  z-index: 1;

  ul {
    overflow: hidden;
  }
`

const Li = styled.li<LiProps>`
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    ${mixinBackground}
  }

  ${({chosen}) => chosen && css`
    font-weight: bold;
    color: ${({theme}) => theme.colors.primary};
    ${mixinBackground}
  `}
`

export {Wrapper, Label, ArrowUp, ArrowDown, Popup, Li}