import { combineReducers, configureStore } from '@reduxjs/toolkit';

import categorySlice from './slices/categorySlice';
import sortSlice from './slices/sortSlice';
import searchSlice from './slices/searchSlice';
import theme from './slices/themeSlice';
import cart from './slices/cartSlice';
import itemAPI from '../services/ItemService';
import pizzasAPI from '../services/PizzasService';

const rootReducer = combineReducers({
  activeCategory: categorySlice,
  activeSort: sortSlice,
  searchValue: searchSlice,
  theme,
  cart,
  [itemAPI.reducerPath]: itemAPI.reducer,
  [pizzasAPI.reducerPath]: pizzasAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(itemAPI.middleware)
      .concat(pizzasAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
