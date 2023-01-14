import styled, { css } from 'styled-components';

interface LiProps {
  chosen: boolean;
}

const mixinLiHoverColors = css`
  color: ${({ theme }) => theme.colors.fourth};
  background-color: ${({ theme }) => theme.colors.third};
`;

const Ul = styled.ul`
  display: flex;

  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const Li = styled.li<LiProps>`
  color: ${({ theme }) => theme.colors.third};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    ${mixinLiHoverColors}
    opacity: 0.5;
  }

  ${({ chosen }) =>
    chosen &&
    css`
      ${mixinLiHoverColors}

      &:hover {
        opacity: 1;
      }
    `}

  @media screen and (max-width: 650px) {
    margin-bottom: 10px;
    padding: 10px 22px;
  }
`;

export { Li, Ul };
