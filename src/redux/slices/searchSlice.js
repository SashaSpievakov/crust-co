import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectSearchValue = state => state.searchValue.value;

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
