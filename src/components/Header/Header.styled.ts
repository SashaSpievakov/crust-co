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

const Delimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`

export {Main, Wrapper, Logo, Delimiter};