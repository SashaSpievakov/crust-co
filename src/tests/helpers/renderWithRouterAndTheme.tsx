/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { darkTheme } from '../../styles/Themes.styled';
import AppRouter from '../../router/AppRouter';

const renderWithRouterAndTheme = (
  compenent: ReactElement,
  appRouter: boolean = false,
  route: string = '/',
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={darkTheme}>
          {appRouter && <AppRouter />}
          {compenent}
        </ThemeProvider>
      </MemoryRouter>,
    ),
  };
};

export default renderWithRouterAndTheme;
