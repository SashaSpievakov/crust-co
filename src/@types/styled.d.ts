import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      secondaryTransparent: string,
      black: string,
      gray: string,
    },

    duration: string,
  }
}