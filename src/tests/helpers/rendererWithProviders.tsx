import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { darkTheme } from '../../styles/Themes.styled';
import { RootState, setupStore } from '../../store/store';

const rendererWithProviders = (
  compenent: ReactElement,
  route: string = '/',
  preloadedStore: PreloadedState<RootState> = {},
) => {
  setupListeners(setupStore(preloadedStore).dispatch);

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

export default rendererWithProviders;
