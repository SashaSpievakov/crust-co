/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';

const renderWithStoreAndTheme = (compenent: ReactElement) => {
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
      </Provider>,
    ),
  };
};

export default renderWithStoreAndTheme;
