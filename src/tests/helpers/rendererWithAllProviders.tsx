import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';
import AppRouter from '../../router/AppRouter';

const rendererWithAllProviders = (
  compenent: ReactElement,
  appRouter: boolean = false,
  route: string = '/',
) => {
  return {
    ...renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[route]}>
            {appRouter ?? <AppRouter />}
            <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
          </MemoryRouter>
        </Provider>,
      )
      .toJSON(),
  };
};

export default rendererWithAllProviders;
