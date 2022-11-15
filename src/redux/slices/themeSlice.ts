import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ThemeState {
  isLight: boolean,
}

const initialState: ThemeState = {
  isLight: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isLight = action.payload;
    },
  },
});

export const selectIsLight = (state: RootState) => state.theme.isLight;

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;