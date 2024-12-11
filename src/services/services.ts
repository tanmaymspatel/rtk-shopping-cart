import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProductResponse } from '../utility/model/product.model';

export const apiUrl = import.meta.env.VITE_API_URL;

export const commerceApi = createApi({
  reducerPath: "commerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductResponse, void>({
        query: () => `products`,
      }),
  }),
});

// export const productServices = commerceApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => `products`,
//     }),
//   }),
// });

// Export the hooks
export const useGetProducts  = commerceApi.endpoints.getProducts.useQuery;
