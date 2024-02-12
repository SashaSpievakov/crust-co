/* eslint import/no-extraneous-dependencies: 0 */

import { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRouterTester from '../../router/AppRouterTester';
import { RootState, setupStore } from '../../store/store';
import { darkTheme } from '../../styles/Themes.styled';

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
