import { createSlice } from "@reduxjs/toolkit";

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

export const selectCategory = state => state.activeCategory.index;

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
