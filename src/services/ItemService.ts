import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '../models/IPizzaItem';

const itemAPI = createApi({
  reducerPath: 'itemAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Item'],
  endpoints: (build) => ({
    fetchItem: build.query<IPizzaItem, string>({
      query: (id) => ({
        url: `/pizza-items/${id}`,
      }),
      providesTags: () => ['Item'],
    }),
  }),
});

export default itemAPI;
