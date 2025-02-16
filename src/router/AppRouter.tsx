import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from '@src/components/UI';
import { MainLayout } from '@src/layouts';

const Home = lazy(() => import('@src/pages/Home'));
const Cart = lazy(() => import('@src/pages/Cart'));
const Pizza = lazy(() => import('@src/pages/Pizza'));
const NotFound = lazy(() => import('@src/pages/NotFound'));

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizzas/:name" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
