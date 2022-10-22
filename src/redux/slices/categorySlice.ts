import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  index: 0,
};

export const categorySlice = createSlice({
  name: "activeCategory",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const selectCategory = (state: RootState) => state.activeCategory.index;

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
