import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import categorySlice from "./slices/categorySlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";
import theme from "./slices/themeSlice";
import cart from "./slices/cartSlice";
import pizzas from "./slices/pizzasSlice";
import item from "./slices/itemSlice";

const rootReducer = combineReducers({
  activeCategory: categorySlice,
  activeSort: sortSlice,
  searchValue: searchSlice,
  theme,
  cart,
  pizzas,
  item,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
