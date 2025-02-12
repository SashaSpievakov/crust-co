/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRouterTester } from '@src/router';
import { RootState, setupStore } from '@src/store';
import { darkTheme } from '@src/styles/Themes.styled';

export const renderWithProvidersAndRoutes = (
  compenent: ReactElement | null,
  routes: boolean = false,
  route: string = '/',
  preloadedStore: PreloadedState<RootState> = {},
) => {
  return {
    ...render(
      <Provider store={setupStore(preloadedStore)}>
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider theme={darkTheme}>
            {routes && <AppRouterTester />}
            {compenent}
          </ThemeProvider>
        </MemoryRouter>
      </Provider>,
    ),
  };
};
