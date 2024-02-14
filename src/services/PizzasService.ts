import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '../models/IPizzaItem';

interface IFetchItems {
  activeCategory: number;
  sortSearchParam: string;
}

const pizzasAPI = createApi({
  reducerPath: 'pizzasAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Pizzas'],
  endpoints: (build) => ({
    fetchPizzas: build.query<IPizzaItem[], IFetchItems>({
      query: ({ activeCategory, sortSearchParam }) => ({
        url: `/pizza-items?sortBy=${sortSearchParam}`,
        params: {
          category: activeCategory > 0 ? activeCategory : undefined,
          // TODO refactor to the normalized query after your custom backend is ready and supports that
          // sortBy: sortSearchParam,
        },
      }),
      providesTags: () => ['Pizzas'],
    }),
  }),
});

export default pizzasAPI;
