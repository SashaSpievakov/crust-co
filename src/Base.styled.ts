import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#5e3d1d",
    secondary: "#b08c69",
    black: "#232323",
    gray: "#f6f6f6",
  },

  duration: "0.15s",
  noselect: "-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none -moz-user-select: none; -ms-user-select: none; user-select: none;",
};

const Global = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
  box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.secondary};
  }

  a,
  span,
  p,
  b,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({theme}) => theme.colors.black};
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  }

  a {
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
`

const Main = styled.main`
  padding: 40px 0;
`

const Title = styled.h2`
  margin: 35px 0;
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;
  row-gap: 40px;
  justify-items: center;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Block = styled(Top)`
  margin-bottom: 30px;
`

const Error = styled.div`
  margin: 80px auto;
  width: 600px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 22px;
  }
`


export {theme, Wrapper, Main, Title, Items, Top, Block, Error};
export default Global;