/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';
import AppRouterTester from '../../router/AppRouterTester';

const renderWithProviders = (
  compenent: ReactElement | null,
  routes: boolean = false,
  route: string = '/',
) => {
  return {
    ...render(
      <Provider store={store}>
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
