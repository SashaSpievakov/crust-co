import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ICartItem {
  id: string,
  name: string,
  price: number,
  size: number,
  type: string,
  count: number,
}

export interface CartItemForDelete {
  id: string,
  price: number,
  count: number,
}

interface CartSliceState {
  totalPrice: number,
  itemsCount: number,
  items: ICartItem[]
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
  itemsCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

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
    removeItem: (state, action: PayloadAction<CartItemForDelete>) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        if (findItem.count > 1) {
        findItem.count--;
        } else {
          state.items = state.items.filter(obj => obj.id !== action.payload.id);
        }
      }

      state.itemsCount -= 1;
      state.totalPrice -= action.payload.price;
    },
    removeItems: (state, action: PayloadAction<CartItemForDelete>) => {
      state.items = state.items.filter(obj => obj.id !== action.payload.id);

      state.itemsCount -= action.payload.count;
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    clearItems: state => {
      state.items = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find(obj => obj.id === id);

export const { addItem, removeItems, removeItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
