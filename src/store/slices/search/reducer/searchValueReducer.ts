import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchSliceState {
  value: string;
}

const initialState: SearchSliceState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
