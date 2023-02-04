/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';
import AppRouter from '../../router/AppRouter';

const renderWithAllProviders = (
  compenent: ReactElement,
  appRouter: boolean = false,
  route: string = '/',
) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider theme={darkTheme}>
            {appRouter && <AppRouter />}
            {compenent}
          </ThemeProvider>
        </MemoryRouter>
      </Provider>,
    ),
  };
};

export default renderWithAllProviders;
