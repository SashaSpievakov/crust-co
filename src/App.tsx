import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Global from "./styles/Global.styled";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { selectIsLight } from "./redux/slices/themeSlice";
import { lightTheme, darkTheme } from "./styles/Themes.styled";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */"./pages/Cart/Cart"));
const FullItem = React.lazy(() => import(/* webpackChunkName: "FullItem" */"./pages/FullItem"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */"./pages/NotFound"));

function App() {
  const isLight = useSelector(selectIsLight);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
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
