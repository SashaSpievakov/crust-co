import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import Global, { theme } from "./Base.styled";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>

      </Provider>
    </BrowserRouter>
  );
}