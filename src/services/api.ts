import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/data" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({ query: () => "/data.json" }),
  }),
});

export const { useGetProductsQuery } = apiSlice;

export default apiSlice;
