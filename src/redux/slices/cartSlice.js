import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  itemsCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
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
    removeItem: (state, action) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter(obj => obj.id !== action.payload.id);
      }

      state.itemsCount -= 1;
      state.totalPrice -= action.payload.price;
    },
    removeItems: (state, action) => {
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

export const selectCart = state => state.cart;
export const selectCartItemById = id => state =>
  state.cart.items.find(obj => obj.id === id);

export const { addItem, removeItems, removeItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
