import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Global from './styles/Global.styled';
import { selectIsLight } from './store/slices/themeSlice';
import { lightTheme, darkTheme } from './styles/Themes.styled';
import AppRouter from './router/AppRouter';

function App() {
  const isLight = useSelector(selectIsLight);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Global />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
