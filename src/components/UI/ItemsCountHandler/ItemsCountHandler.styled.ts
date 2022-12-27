import styled, { css } from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";

interface CounterProps {
  isFullScreen?: boolean;
}

const mixinButton = css`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

const Counter = styled.div<CounterProps>`
  display: flex;
  align-items: center;
  min-width: 100px;
  padding: 8.25px 0;

  svg {
    font-size: ${({ isFullScreen }) => (isFullScreen ? "34px" : "27px")};
  }
`;

const Minus = styled(HiMinus)`
  ${mixinButton}
  margin-right: 15px;
`;

const Plus = styled(HiPlus)`
  ${mixinButton}
`;

const Count = styled.span<CounterProps>`
  font-size: ${({ isFullScreen }) => (isFullScreen ? "30px" : "22px")};
  margin-right: 15px;
`;

const MainPlus = styled(BsPlusLg)`
  font-size: 17px;
  padding-bottom: 2px;
  margin-right: 5px;
`;

export { Counter, Minus, Plus, Count, MainPlus };
