import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import getCartFromLS from '../../utils/getCartFromLS';
import { ICartItem } from '../../models/ICartItem';
import { CartSliceState } from '../../models/CartSliceState';

const { items, totalPrice, itemsCount } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
  itemsCount,
};

export const cartSlice = createSlice({
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
      }

      state.itemsCount -= 1;
      state.totalPrice -= action.payload.price;
    },
    removeItems: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter(
        (obj) =>
          obj.name !== action.payload.name ||
          obj.size !== action.payload.size ||
          obj.type !== action.payload.type,
      );

      state.itemsCount -= action.payload.count;
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    clearItems: (state) => {
      state.items = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectItemPriceById = (id: string) => (state: RootState) => {
  const selectedItems: ICartItem[] = state.cart.items.filter(
    (obj) => obj.id === id,
  );

  const count: number = selectedItems.reduce(
    (currenCount: number, item: ICartItem) => {
      return item.count + currenCount;
    },
    0,
  );

  return count;
};
export const selectCurrentItemCount =
  (name: string, size: number, type: string) => (state: RootState) => {
    const selectedItem: ICartItem | undefined = state.cart.items.find(
      (obj) => obj.name === name && obj.size === size && obj.type === type,
    );

    return selectedItem ? selectedItem.count : 0;
  };

export const { addItem, removeItems, removeItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
