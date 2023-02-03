/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../../styles/Themes.styled';

const renderWithTheme = (compenent: ReactElement) => {
  return <ThemeProvider theme={lightTheme}>{compenent}</ThemeProvider>;
};

export default renderWithTheme;
