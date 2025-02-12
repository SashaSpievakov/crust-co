import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getThemeFromLs } from '@src/utils';

interface ThemeState {
  isLight: boolean;
}

const initialState: ThemeState = {
  isLight: getThemeFromLs(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isLight = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
