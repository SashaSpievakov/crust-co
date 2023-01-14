import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  colors: {
    primary: '#5e3d1d',
    secondary: '#b08c69',
    secondaryTransparent: 'rgba(176, 140, 105, 0.05)',
    third: '#232323',
    fourth: '#fff',
    black: '#181818',
    gray: '#f3f3f3',
    chosen: '#fff',
    disabled: '#f3f3f3',
  },

  duration: '0.2s',
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#755d47',
    secondary: '#694421',
    secondaryTransparent: 'rgba(176, 140, 105, 0.05)',
    third: '#d5d5d5',
    fourth: '#232323',
    black: '#181818',
    gray: '#5b5c5c',
    chosen: '#d5d5d5',
    disabled: '#959595',
  },

  duration: '0.2s',
};

export { lightTheme, darkTheme };
