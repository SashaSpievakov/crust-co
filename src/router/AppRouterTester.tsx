import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Pizza from '../pages/Pizza';

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
