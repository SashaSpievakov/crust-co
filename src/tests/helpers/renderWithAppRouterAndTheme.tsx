/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import AppRouter from '../../router/AppRouter';
import { darkTheme } from '../../styles/Themes.styled';

const renderWithAppRouterAndTheme = (compenent: ReactElement) => {
  return {
    ...render(
      <MemoryRouter>
        <ThemeProvider theme={darkTheme}>
          <AppRouter />
          {compenent}
        </ThemeProvider>
      </MemoryRouter>,
    ),
  };
};

export default renderWithAppRouterAndTheme;
