import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPizzaItem } from '../models/IPizzaItem';

interface IFetchItems {
  activeCategory: number;
  sortSearchParam: string;
}

const pizzasAPI = createApi({
  reducerPath: 'pizzasAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6344adb1dcae733e8fe3067a.mockapi.io/',
  }),
  tagTypes: ['Pizzas'],
  endpoints: (build) => ({
    fetchPizzas: build.query<IPizzaItem[], IFetchItems>({
      query: ({ activeCategory, sortSearchParam }) => ({
        url: `pizza-items?${
          activeCategory > 0 ? `category=${activeCategory}&` : ''
        }sortBy=${sortSearchParam}`,
      }),
      providesTags: () => ['Pizzas'],
    }),
  }),
});

export default pizzasAPI;
