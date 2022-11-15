import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./slices/categorySlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";
import theme from "./slices/themeSlice";
import cart from "./slices/cartSlice";
import pizzas from "./slices/pizzasSlice";
import item from "./slices/itemSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    activeCategory: categorySlice,
    activeSort: sortSlice,
    searchValue: searchSlice,
    theme,
    cart,
    pizzas,
    item,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();