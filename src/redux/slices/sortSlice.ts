import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SortSliceState {
  index: number;
}

const initialState: SortSliceState = {
  index: 0,
};

const sortSlice = createSlice({
  name: "activeSort",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const selectSort = (state: RootState) => state.activeSort.index;

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
