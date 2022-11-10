import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      black: string,
      gray: string,
    },

    duration: string,
    noselect: string,
  }
}