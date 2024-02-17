import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';

interface PopupProps {
  open: boolean;
}

interface LiProps {
  chosen: boolean;
}

const mixinArrow = css`
  font-size: 15px;
  margin-right: 5px;
  user-select: none;
`;

const mixinBackground = css`
  background-color: ${({ theme }) => theme.colors.secondaryTransparent};
`;

const Section = styled.section`
  width: 127px;
  position: relative;
  margin-top: 15px;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    align-self: end;
  }
`;

const Label = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  z-index: 10;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray};
    outline: 5px solid ${({ theme }) => theme.colors.gray};
  }

  b {
    margin-right: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.primarySecondary};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primarySecondary};
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
      top: 20px;
      opacity: 1;
    `}
`;

const Li = styled.li<LiProps>`
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    ${mixinBackground}
  }

  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.third};
    outline-offset: -4px;
  }

  ${({ chosen }) =>
    chosen &&
    css`
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primarySecondary};
      ${mixinBackground}
    `}
`;

export { ArrowDown, ArrowUp, Label, Li, Popup, Section };
