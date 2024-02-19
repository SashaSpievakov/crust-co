import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '../models/IPizzaItem';

export const itemAPI = createApi({
  reducerPath: 'itemAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  }),
  tagTypes: ['Item'],
  endpoints: (build) => ({
    fetchItem: build.query<IPizzaItem, string>({
      query: (name) => ({
        url: `/pizzas/${name}`,
      }),
      providesTags: () => ['Item'],
    }),
  }),
});
