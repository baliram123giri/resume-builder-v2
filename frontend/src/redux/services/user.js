import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const user = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: () => ({
        url: `/user`,
      }),
    }),
    userInfoUpdate: builder.mutation({
      query: (data) => ({
        url: `/user/update`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUserInfoQuery, useUserInfoUpdateMutation } = user;
