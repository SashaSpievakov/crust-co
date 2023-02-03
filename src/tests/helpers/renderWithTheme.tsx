/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../../styles/Themes.styled';

const renderWithTheme = (compenent: ReactElement) => {
  return {
    ...render(<ThemeProvider theme={lightTheme}>{compenent}</ThemeProvider>),
  };
};

export default renderWithTheme;
