import styled, { css } from 'styled-components';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

interface PopupProps {
  open: boolean;
}

interface LiProps {
  chosen: boolean;
}

const mixinArrow = css`
  font-size: 15px;
  margin-right: 5px;
`;

const mixinBackground = css`
  background-color: ${({ theme }) => theme.colors.secondaryTransparent};
`;

const Wrapper = styled.section`
  width: 127px;
  position: relative;
  margin-top: 15px;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    align-self: end;
  }
`;

const Label = styled.div`
  display: flex;
  align-items: center;

  b {
    margin-right: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};
  }
`;

const ArrowUp = styled(BsCaretUpFill)`
  ${mixinArrow}
`;

const ArrowDown = styled(BsCaretDownFill)`
  ${mixinArrow}
`;

const Popup = styled.section<PopupProps>`
  visibility: hidden;
  position: absolute;
  right: -10px;
  top: 0px;
  width: 160px;
  margin-top: 15px;
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.fourth};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  opacity: 0;
  cursor: auto;
  z-index: 1;
  transition: 0.25s;

  ${({ open }) =>
    open &&
    css`
      visibility: visible;
      top: 22.5px;
      opacity: 1;
    `}
`;

const Li = styled.li<LiProps>`
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    ${mixinBackground}
  }

  ${({ chosen }) =>
    chosen &&
    css`
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
      ${mixinBackground}
    `}
`;

export { Wrapper, Label, ArrowUp, ArrowDown, Popup, Li };
