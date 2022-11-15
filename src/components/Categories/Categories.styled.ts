import styled, {css} from "styled-components";

interface LiProps {
  chosen: boolean
}

const Ul = styled.ul`
  display: flex;

  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
  }
`

const Li = styled.li<LiProps>`
  color: ${({theme}) => theme.colors.black};
  background-color: ${({theme}) => theme.colors.gray};
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  ${({chosen}) => chosen && css`
    background-color: ${({theme}) => theme.colors.third};
    color: ${({theme}) => theme.colors.fourth};
  `}

  @media screen and (max-width: 650px) {
    margin-bottom: 10px;
    padding: 10px 22px;
  }
`

export { Li, Ul }