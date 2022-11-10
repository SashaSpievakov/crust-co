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
`;

export {theme};
export default Global;