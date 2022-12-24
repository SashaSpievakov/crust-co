import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPizzaItem } from "../models/IPizzaItem";

const itemAPI = createApi({
  reducerPath: "itemAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6344adb1dcae733e8fe3067a.mockapi.io/",
  }),
  tagTypes: ["Item"],
  endpoints: (build) => ({
    fetchItem: build.query<IPizzaItem, string>({
      query: (id: string) => ({
        url: `pizza-items/${id}`,
      }),
      providesTags: () => ["Item"],
    }),
  }),
});

export default itemAPI;
