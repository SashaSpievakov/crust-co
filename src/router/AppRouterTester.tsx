import { Route, Routes } from 'react-router-dom';

import Cart from '@src/pages/Cart';
import Home from '@src/pages/Home';
import NotFound from '@src/pages/NotFound';
import Pizza from '@src/pages/Pizza';

export const AppRouterTester = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="pizzas/:name" element={<Pizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
