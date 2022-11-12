import styled, {css} from "styled-components";

interface LiProps {
  chosen: boolean
}

const Ul = styled.ul`
  display: flex;
`

const Li = styled.li<LiProps>`
  background-color: ${({theme}) => theme.colors.gray};
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  ${({chosen}) => chosen && css`
    background-color: ${({theme}) => theme.colors.black};
    color: #fff;
  `}
`

export { Li, Ul }