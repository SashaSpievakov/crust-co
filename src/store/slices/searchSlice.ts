import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface SearchSliceState {
  value: string;
}

const initialState: SearchSliceState = {
  value: "",
};

const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const selectSearchValue = (state: RootState) => state.searchValue.value;

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
