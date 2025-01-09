import { PreloadedState } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { RootState, setupStore } from '../../store';
import { darkTheme } from '../../styles/Themes.styled';

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
