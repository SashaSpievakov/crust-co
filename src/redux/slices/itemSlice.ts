import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PizzaItem, Status } from "./pizzasSlice";

interface ItemSliceState {
  status: Status;
  data: PizzaItem;
}

export const fetchItem = createAsyncThunk<PizzaItem, string>(
  "item/fetchItemStatus",
  async (id) => {
    const { data } = await axios.get<PizzaItem>(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items/${id}`,
    );
    return data;
  },
);

const initialState: ItemSliceState = {
  data: {} as PizzaItem,
  status: Status.LOADING,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<PizzaItem>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItem.pending, (state) => {
      state.data = {} as PizzaItem;
      state.status = Status.LOADING;
    });

    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.data = { ...action.payload };
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchItem.rejected, (state) => {
      state.data = {} as PizzaItem;
      state.status = Status.REJECTED;
    });
  },
});

export const selectItem = (state: RootState) => state.item;

export const { setData } = itemSlice.actions;

export default itemSlice.reducer;
