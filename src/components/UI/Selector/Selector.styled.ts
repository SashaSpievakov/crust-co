import styled, { css } from "styled-components";

interface LiProps {
  chosen: boolean;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;

  ul {
    display: flex;
    flex: 1;
  }
`;

const Li = styled.li<LiProps>`
  flex: 1;
  padding: 8px;
  font-weight: 600;
  font-size: 14px;
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
