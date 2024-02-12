import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import FullItem from '../pages/Item/Item';
import NotFound from '../pages/NotFound/NotFound';

const AppRouterTester = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="item/:id" element={<FullItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouterTester;
