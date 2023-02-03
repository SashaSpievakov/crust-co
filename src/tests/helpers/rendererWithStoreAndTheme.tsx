/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';

const rendererWithStoreAndTheme = (compenent: ReactElement) => {
  return {
    ...renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
        </Provider>,
      )
      .toJSON(),
  };
};

export default rendererWithStoreAndTheme;
