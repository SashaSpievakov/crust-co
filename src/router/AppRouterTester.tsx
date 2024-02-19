import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Pizza from '../pages/Pizza';

const AppRouterTester = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="pizza/:name" element={<Pizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouterTester;
