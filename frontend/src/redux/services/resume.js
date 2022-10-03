import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const resume = createApi({
  reducerPath: "resume",
  tagTypes: ["resumeRender"],
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    resumeList: builder.query({
      query: () => ({
        url: `/resume/list`,
      }),
      providesTags: ["resumeRender"],
    }),
    resumeCreate: builder.mutation({
      query: (data) => ({
        url: `/resume/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["resumeRender"],
    }),
    resumeUpdate: builder.mutation({
      query: (data) => ({
        url: `/resume/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["resumeRender"],
    }),
    resumeDelete: builder.mutation({
      query: (id) => ({
        url: `/resume/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["resumeRender"],
    }),
  }),
});

export const {
  useResumeListQuery,
  useResumeCreateMutation,
  useResumeUpdateMutation,
  useResumeDeleteMutation,
} = resume;
