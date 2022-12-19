import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Status } from "./pizzasSlice";
import { IPizzaItem } from "../../models/IPizzaItem";

interface ItemSliceState {
  status: Status;
  data: IPizzaItem;
}

export const fetchItem = createAsyncThunk<IPizzaItem, string>(
  "item/fetchItemStatus",
  async (id) => {
    const { data } = await axios.get<IPizzaItem>(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items/${id}`,
    );
    return data;
  },
);

const initialState: ItemSliceState = {
  data: {} as IPizzaItem,
  status: Status.LOADING,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IPizzaItem>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItem.pending, (state) => {
      state.data = {} as IPizzaItem;
      state.status = Status.LOADING;
    });

    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.data = { ...action.payload };
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchItem.rejected, (state) => {
      state.data = {} as IPizzaItem;
      state.status = Status.REJECTED;
    });
  },
});

export const selectItem = (state: RootState) => state.item;

export const { setData } = itemSlice.actions;

export default itemSlice.reducer;
