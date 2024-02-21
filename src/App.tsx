import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from './hooks/reduxHooks';
import { AppRouter } from './router';
import { selectIsLight } from './store/slices/theme/selectors/selectIsLight';
import { Global } from './styles/Global.styled';
import { darkTheme, lightTheme } from './styles/Themes.styled';

export const App: FC = () => {
  const isLight = useAppSelector(selectIsLight);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Global />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
