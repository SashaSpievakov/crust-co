import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '../models/IPizzaItem';

export const pizzaAPI = createApi({
  reducerPath: 'pizzaPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  }),
  tagTypes: ['Pizza'],
  endpoints: (build) => ({
    fetchItem: build.query<IPizzaItem, string>({
      query: (name) => ({
        url: `/pizzas/${name}`,
      }),
      providesTags: (result) =>
        result ? [{ type: 'Pizza', id: result.name }] : ['Pizza'],
    }),
  }),
});
