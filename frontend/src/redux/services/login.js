import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const login = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body:data
      }),
    }),
    userRegister: builder.mutation({
      query: (data) => ({
        url: `/user/register`,
        method: "POST",
        body:data
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = login;
