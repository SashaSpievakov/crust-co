import { ThemeProvider } from 'styled-components';

import Global from './styles/Global.styled';
import { useAppSelector } from './hooks/reduxHooks';
import { lightTheme, darkTheme } from './styles/Themes.styled';
import { selectIsLight } from './store/slices/theme/selectors/selectIsLight';
import AppRouter from './router/AppRouter';

function App() {
  const isLight = useAppSelector(selectIsLight);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Global />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
