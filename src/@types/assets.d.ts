import "styled-components";

declare module "*.svg" {
  const content: any,
  export default content;
}

declare module "*.png" {
  const content: any,
  export default content;
}

declare module "*.scss" {
  const content: any,
  export default content;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      gray: string;
    };

    duration: string;
  }
}