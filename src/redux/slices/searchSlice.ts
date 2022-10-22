import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const selectSearchValue = (state: RootState) => state.searchValue.value;

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
