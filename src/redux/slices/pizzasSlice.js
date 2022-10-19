import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "pizzas/fetchItemsStatus",
  async ({ activeCategory, sortedPropertyName }) => {
    const { data } = await axios.get(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items?${
        activeCategory > 0 ? `category=${activeCategory}&` : ""
      }sortBy=${sortedPropertyName}`
    );
    return data;
  }
);

const initialState = {
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

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
