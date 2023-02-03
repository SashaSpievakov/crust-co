/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';

const renderWithAllProviders = (compenent: ReactElement) => {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
        </MemoryRouter>
      </Provider>,
    ),
  };
};

export default renderWithAllProviders;
