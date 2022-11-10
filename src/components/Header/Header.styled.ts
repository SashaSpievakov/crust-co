import styled from "styled-components";

import { Container } from "../../Base.styled";

const Main = styled.header`
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  padding: 40px 0;
`

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.section`
  display: flex;

  img {
    margin-right: 15px;
  }

  h1 {
    color: #181818;
    font-size: 24px;
    letter-spacing: 1%;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    color: #7b7b7b;
  }
`

export {Main, Wrapper, Logo};