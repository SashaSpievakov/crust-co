import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import getTheme from '../../../../utils/getThemeFromLs/getThemeFromLs';

interface ThemeState {
  isLight: boolean;
}

const initialState: ThemeState = {
  isLight: getTheme(),
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
