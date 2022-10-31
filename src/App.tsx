import { Route, Routes } from "react-router-dom";
import React from "react";

import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FullItem from "./pages/FullItem";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="item/:id" element={<FullItem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
