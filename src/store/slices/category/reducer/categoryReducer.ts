import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategorySliceState {
  index: number;
}

const initialState: CategorySliceState = {
  index: 0,
};

const categorySlice = createSlice({
  name: 'activeCategory',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
