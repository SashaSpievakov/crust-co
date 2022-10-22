import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PizzaItem {
  category: number,
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  rating: number,
  sizes: number[],
  types: number[],
}

interface FetchItems {
  activeCategory: number,
  sortedPropertyName: string,
}

export const fetchItems = createAsyncThunk<PizzaItem[], FetchItems>(
  "pizzas/fetchItemsStatus",
  async ({ activeCategory, sortedPropertyName }) => {
    const { data } = await axios.get<PizzaItem[]>(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items?${
        activeCategory > 0 ? `category=${activeCategory}&` : ""
      }sortBy=${sortedPropertyName}`
    );
    return data;
  }
);

interface PizzasSliceState {
  status: "loading" | "success" | "rejected",
  items: PizzaItem[],
}

const initialState: PizzasSliceState = {
  items: [],
  status: "loading",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchItems.rejected, (state) => {
      state.items = [];
      state.status = "rejected";
    });
  }
});

export const selectPizzasData = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
