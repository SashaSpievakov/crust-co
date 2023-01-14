import styled, { css } from 'styled-components';

interface LiProps {
  chosen: boolean;
}

interface DivProps {
  isFullScreen: boolean;
}

const Div = styled.div<DivProps>`
  display: flex;
  font-size: ${({ isFullScreen }) => (isFullScreen ? '18px' : '14px')};
  flex-direction: column;
  gap: 6px;
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;

  ul {
    display: flex;
    flex: 1;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ isFullScreen }) => (isFullScreen ? '16px' : '14px')};
  }

  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      min-width: 400px;

      @media screen and (max-width: 550px) {
        min-width: 300px;
      }

      @media screen and (max-width: 400px) {
        min-width: 230px;
      }
    `}
`;

const Li = styled.li<LiProps>`
  font-weight: 600;
  flex: 1;
  padding: 8px;
  cursor: pointer;

  ${({ chosen }) =>
    chosen &&
    css`
      color: ${({ theme }) => theme.colors.black};
      background: ${({ theme }) => theme.colors.chosen};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
      cursor: auto;
    `}
`;

export { Div, Li };
