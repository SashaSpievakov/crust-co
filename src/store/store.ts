import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import { pizzaAPI, pizzasAPI } from '../services';
import cart from './slices/cart/reducer/cartReducer';
import theme from './slices/theme/reducer/themeReducer';

const rootReducer = combineReducers({
  theme,
  cart,
  [pizzaAPI.reducerPath]: pizzaAPI.reducer,
  [pizzasAPI.reducerPath]: pizzasAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(pizzaAPI.middleware)
        .concat(pizzasAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
