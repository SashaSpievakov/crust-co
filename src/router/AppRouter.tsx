import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from '../components/UI';
import MainLayout from '../layouts/MainLayout';

const Home = React.lazy(
  () => import(/* webpackChunkName: "Home" */ '../pages/Home'),
);
const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ '../pages/Cart'),
);
const Pizza = React.lazy(
  () => import(/* webpackChunkName: "FullItem" */ '../pages/Pizza'),
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound'),
);

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
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
