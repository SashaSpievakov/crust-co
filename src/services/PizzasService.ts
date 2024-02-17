import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '../models/IPizzaItem';

interface IFetchItems {
  activeCategory: number;
  sortSearchParam: string;
}

export const pizzasAPI = createApi({
  reducerPath: 'pizzasAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  }),
  tagTypes: ['Pizzas'],
  endpoints: (build) => ({
    fetchPizzas: build.query<IPizzaItem[], IFetchItems>({
      query: ({ activeCategory, sortSearchParam }) => ({
        url: '/pizzas',
        params: {
          category: activeCategory > 0 ? activeCategory : undefined,
          sortBy: sortSearchParam,
        },
      }),
      providesTags: () => ['Pizzas'],
    }),
  }),
});
