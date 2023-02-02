/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import AppRouter from '../../router/AppRouter';
import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';

const renderWithProviders = (compenent: ReactElement) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={darkTheme}>
            <AppRouter />
            {compenent}
          </ThemeProvider>
        </MemoryRouter>
      </Provider>,
    ),
  };
};

export default renderWithProviders;
