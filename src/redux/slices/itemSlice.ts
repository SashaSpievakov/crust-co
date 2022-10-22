import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItem = createAsyncThunk("item/fetchItemStatus", async id => {
  const { data } = await axios.get(
    `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items/${id}`
  );
  return data;
});

const initialState = {
  data: {},
  status: "loading",
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchItem.pending]: (state, action) => {
      state.data = {};
      state.status = "loading";
    },
    [fetchItem.fulfilled]: (state, action) => {
      state.data = { ...action.payload };
      state.status = "success";
    },
    [fetchItem.rejected]: state => {
      state.data = {};
      state.status = "rejected";
    },
  },
});

export const selectItem = state => state.item;

export const { setData } = itemSlice.actions;

export default itemSlice.reducer;
