/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { darkTheme } from '../../styles/Themes.styled';
import { RootState, setupStore } from '../../store/store';
import AppRouterTester from '../../router/AppRouterTester';

const renderWithProviders = (
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

export default renderWithProviders;
