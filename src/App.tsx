import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga4';

import Global from './styles/Global.styled';
import { useAppSelector } from './hooks/reduxHooks';
import { lightTheme, darkTheme } from './styles/Themes.styled';
import { selectIsLight } from './store/slices/theme/selectors/selectIsLight';
import AppRouter from './router/AppRouter';

ReactGA.initialize('G-W99PVF5JMB');

ReactGA.send({ hitType: 'pageview', page: '/cart', title: 'Cart' });
ReactGA.send({ hitType: 'pageview', page: '/item/:id', title: 'Item' });
ReactGA.send({ hitType: 'pageview', page: '/*', title: 'Not Found' });

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
