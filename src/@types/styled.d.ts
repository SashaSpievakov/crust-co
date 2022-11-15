import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      secondaryTransparent: string,
      third: string,
      fourth: string,
      typography: string,
      gray: string,
    },

    duration: string,
  }
}