import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '../../../../models';
import { getCartFromLS } from '../../../../utils';

export interface CartSliceState {
  totalPrice: number;
  itemsCount: number;
  items: ICartItem[];
}

const { items, totalPrice, itemsCount } = getCartFromLS();

const initialState: CartSliceState = {
  items,
  itemsCount,
  totalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find(
        (obj) =>
          obj.name === action.payload.name &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.itemsCount += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find(
        (obj) =>
          obj.name === action.payload.name &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type,
      );

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter(
            (obj) =>
              obj.name !== action.payload.name ||
              obj.size !== action.payload.size ||
              obj.type !== action.payload.type,
          );
        }
      } else return;

      state.itemsCount -= 1;
      state.totalPrice -= action.payload.price;
    },
    removeItems: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find(
        (obj) =>
          obj.name === action.payload.name &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type,
      );

      if (!findItem) return;

      state.items = state.items.filter(
        (obj) =>
          obj.name !== action.payload.name ||
          obj.size !== action.payload.size ||
          obj.type !== action.payload.type,
      );

      state.itemsCount -= action.payload.count;
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    clearCart: (state) => {
      state.items = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItems, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
