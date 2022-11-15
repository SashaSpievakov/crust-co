import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#5e3d1d",
    secondary: "#b08c69",
    secondaryTransparent: "rgba(176, 140, 105, 0.05)",
    third: "#232323",
    fourth: "#fff",
    gray: "#f6f6f6",
  },

  duration: "0.15s",
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#5e3d1d",
    secondary: "#b08c69",
    secondaryTransparent: "rgba(176, 140, 105, 0.05)",
    third: "#fff",
    fourth: "#232323",
    gray: "#f6f6f6",
  },

  duration: "0.15s",
};

export { lightTheme, darkTheme }