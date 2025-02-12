import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from '@src/components/UI';
import { MainLayout } from '@src/layouts';

const Home = React.lazy(
  () => import(/* webpackChunkName: "Home" */ '@src/pages/Home'),
);
const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ '@src/pages/Cart'),
);
const Pizza = React.lazy(
  () => import(/* webpackChunkName: "FullItem" */ '@src/pages/Pizza'),
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ '@src/pages/NotFound'),
);

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizzas/:name"
          element={
            <Suspense fallback={<Loading />}>
              <Pizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
