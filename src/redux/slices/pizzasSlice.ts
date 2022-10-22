import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICartItem } from "./cartSlice";

interface FetchItems {
  activeCategory: number,
  sortedPropertyName: string,
}

export const fetchItems = createAsyncThunk<ICartItem[], FetchItems>(
  "pizzas/fetchItemsStatus",
  async ({ activeCategory, sortedPropertyName }) => {
    const { data } = await axios.get<ICartItem[]>(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items?${
        activeCategory > 0 ? `category=${activeCategory}&` : ""
      }sortBy=${sortedPropertyName}`
    );
    return data;
  }
);

export interface PizzaItem {
  category: number,
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  rating: number,
  sizes: number[],
  types: number[],
}

interface PizzasSliceState {
  status: "loading" | "success" | "rejected",
  items: PizzaItem[],
}

const initialState: PizzasSliceState = {
  items: [],
  status: "loading",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: state => {
      state.items = [];
      state.status = "loading";
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchItems.rejected]: state => {
      state.items = [];
      state.status = "rejected";
    },
  },
});

export const selectPizzasData = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
