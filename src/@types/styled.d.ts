import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondaryTransparent: string;
      third: string;
      fourth: string;
      black: string;
      gray: string;
      grayReverse: string;
      chosen: string;
      disabled: string;
    };

    duration: string;
  }
}
