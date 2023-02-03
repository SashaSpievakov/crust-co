/* eslint import/no-extraneous-dependencies: 0 */

import { ReactElement } from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../../styles/Themes.styled';

const rendererWithTheme = (compenent: ReactElement) => {
  return {
    ...renderer
      .create(<ThemeProvider theme={lightTheme}>{compenent}</ThemeProvider>)
      .toJSON(),
  };
};

export default rendererWithTheme;
