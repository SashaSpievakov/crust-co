import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { darkTheme } from '../../styles/Themes.styled';

const rendererWithRouterAndTheme = (compenent: ReactElement) => {
  return {
    ...renderer
      .create(
        <MemoryRouter>
          <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
        </MemoryRouter>,
      )
      .toJSON(),
  };
};

export default rendererWithRouterAndTheme;
