import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import itemAPI from '../services/ItemService';
import pizzasAPI from '../services/PizzasService';
import cart from './slices/cart/reducer/cartReducer';
import categorySlice from './slices/category/reducer/categoryReducer';
import searchSlice from './slices/search/reducer/searchValueReducer';
import sortSlice from './slices/sort/reducer/sortReducer';
import theme from './slices/theme/reducer/themeReducer';

const rootReducer = combineReducers({
  activeCategory: categorySlice,
  activeSort: sortSlice,
  searchValue: searchSlice,
  theme,
  cart,
  [itemAPI.reducerPath]: itemAPI.reducer,
  [pizzasAPI.reducerPath]: pizzasAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(itemAPI.middleware)
        .concat(pizzasAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
