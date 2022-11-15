import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ThemeState {
  value: string,
}

const initialState: ThemeState = {
  value: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme;

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;