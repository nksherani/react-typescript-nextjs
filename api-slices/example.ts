import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CryptApi = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    UpdatePosts: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: "/posts",
        method: "PUT",
        body: rest,
      }),
    }),
  }),
});
export const { useGetPostsQuery, useUpdatePostsMutation } = CryptApi;
