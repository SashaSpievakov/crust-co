import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#5e3d1d",
    secondary: "#b08c69",
    secondaryTransparent: "rgba(176, 140, 105, 0.05)",
    third: "#232323",
    fourth: "#fff",
    typography: "#181818",
    gray: "#f6f6f6",
  },

  duration: "0.2s",
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#755d47",
    secondary: "#694421",
    secondaryTransparent: "rgba(176, 140, 105, 0.05)",
    third: "#d5d5d5",
    fourth: "#232323",
    typography: "#181818",
    gray: "#4d4d4d",
  },

  duration: "0.2s",
};

export { lightTheme, darkTheme }