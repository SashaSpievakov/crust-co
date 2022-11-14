import styled, { css } from "styled-components";
import { MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';

interface LiProps {
  chosen: boolean
}

const mixinArrow = css`
  font-size: 30px;
`

const mixinBackground = css`
  background-color: ${({theme}) => theme.colors.secondaryTranparent};
`

const Wrapper = styled.div`
  position: relative;
  margin-top: 15px;
  cursor: pointer;
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

const ArrowUp = styled(MdArrowDropUp)`
  ${mixinArrow}
`

const ArrowDown = styled(MdArrowDropDown)`
  ${mixinArrow}
`

const Popup = styled.div`
  position: absolute;
  right: -5px;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
  z-index: 1;

  ul {
    overflow: hidden;

    /* li {
      padding: 12px 20px;
      cursor: pointer;

      &:hover {
        ${mixinBackground}
      } */

      /* &.active {
        font-weight: bold;
        color: $orange;
      } */
    /* } */
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