import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";

import Global from "./styles/Global.styled";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { selectIsLight } from "./redux/slices/themeSlice";

interface Theme {
  third: string,
  fourth: string,
}

const light: Theme = {
  third: "#232323",
  fourth: "#fff",
}

const dark: Theme = {
  third: "#fff",
  fourth: "#232323",
}

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */"./pages/Cart/Cart"));
const FullItem = React.lazy(() => import(/* webpackChunkName: "FullItem" */"./pages/FullItem"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */"./pages/NotFound"));

function App() {
  const themeValue = useSelector(selectIsLight);

  const theme: DefaultTheme = {
    colors: {
      primary: "#5e3d1d",
      secondary: "#b08c69",
      secondaryTransparent: "rgba(176, 140, 105, 0.05)",
      ...light,
      gray: "#f6f6f6",
    },

    duration: "0.15s",
    };

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
            }
          />
          <Route path="item/:id" element={
            <Suspense fallback={<div>Loading...</div>}>
              <FullItem />
            </Suspense>
            }
          />
          <Route path="*" element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
