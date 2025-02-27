import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '@src/models';

export const pizzaAPI = createApi({
  reducerPath: 'pizzaPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API_URL}/api`,
  }),
  tagTypes: ['Pizza'],
  endpoints: (build) => ({
    fetchItem: build.query<IPizzaItem, string>({
      query: (name) => ({
        url: `/pizza/${name}`,
      }),
      providesTags: (result) =>
        result ? [{ type: 'Pizza', id: result.name }] : ['Pizza'],
    }),
  }),
});
