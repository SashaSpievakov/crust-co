import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import "./scss/app.scss";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */"./pages/Cart"));
const FullItem = React.lazy(() => import(/* webpackChunkName: "FullItem" */"./pages/FullItem"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */"./pages/NotFound"));

function App() {
  return (
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
  );
}

export default App;
