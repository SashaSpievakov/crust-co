import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import Loading from '../components/UI/Loading/Loading';

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ '../pages/Cart/Cart'),
);
const FullItem = React.lazy(
  () => import(/* webpackChunkName: "FullItem" */ '../pages/FullItem/FullItem'),
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound/NotFound'),
);

const AppRouter = () => {
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
          path="item/:id"
          element={
            <Suspense fallback={<Loading />}>
              <FullItem />
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

export default AppRouter;
