import { ReactElement } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { RootState, setupStore } from '@src/store';
import { darkTheme } from '@src/styles/Themes.styled';

export const rendererWithProviders = (
  compenent: ReactElement,
  route: string = '/',
  preloadedStore: PreloadedState<RootState> = {},
) => {
  return {
    ...renderer
      .create(
        <Provider store={setupStore(preloadedStore)}>
          <MemoryRouter initialEntries={[route]}>
            <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
          </MemoryRouter>
        </Provider>,
      )
      .toJSON(),
  };
};
