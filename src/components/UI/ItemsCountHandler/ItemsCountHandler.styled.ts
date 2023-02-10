import styled, { css } from 'styled-components';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { BsPlusLg } from 'react-icons/bs';

interface CounterProps {
  isFullScreen?: boolean;
}

interface MinusProps {
  disabled: boolean;
}

const mixinButton = css`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.secondary};
  user-select: none;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }
`;

const Counter = styled.section<CounterProps>`
  display: flex;
  align-items: center;
  min-width: 100px;
  padding: 8.25px 0;

  svg {
    font-size: ${({ isFullScreen }) => (isFullScreen ? '34px' : '27px')};
  }
`;

const Minus = styled(HiMinus)<MinusProps>`
  ${mixinButton}
  margin-right: 15px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.disabled};
      cursor: auto;
    `}
`;

const Plus = styled(HiPlus)`
  ${mixinButton}
`;

const Count = styled.span<CounterProps>`
  font-size: ${({ isFullScreen }) => (isFullScreen ? '30px' : '22px')};
  margin-right: 15px;
`;

const MainPlus = styled(BsPlusLg)`
  font-size: 17px;
  padding-bottom: 2px;
  margin-right: 5px;
`;

export { Counter, Minus, Plus, Count, MainPlus };
