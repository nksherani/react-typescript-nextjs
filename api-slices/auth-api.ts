import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/Account`,
  }),
  endpoints: (builder) => ({
    
    Login: builder.mutation({
      query: (loginData: any) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});
export const { useLoginMutation } = authApi;
