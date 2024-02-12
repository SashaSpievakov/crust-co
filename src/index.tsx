import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { setupStore } from './store/store';

ReactGA.initialize('G-W99PVF5JMB');

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <Provider store={setupStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
}
