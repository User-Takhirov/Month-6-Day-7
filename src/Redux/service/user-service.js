import { createApi } from "@reduxjs/toolkit/query/react";
import { CreateMainBase } from "../../config/Main-base";

export const MainUserApi = createApi({
  reducerPath: "MainUserApi",
  baseQuery: CreateMainBase(),
  tagTypes: ["Update"],
  endpoints: (build) => ({
    GetData: build.query({
      query: (page = 1) => {
        return {
          url: "/todos",
          params: {
            _limit: 4,
            _page: page,
          },
        };
      },
      transformResponse: (data, res) => {
        let countData = res?.response.headers.get("X-Total-count");
        if (countData % 4 != 0) {
          return { data, pageSize: Math.round((Number(countData) + 1) / 4) };
        }
        return { data, pageSize: Math.round(Number(countData) / 4) };
      },
      providesTags: ["Update"],
    }),
    CreateData: build.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Update"],
    }),
    DeleteData: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Update"],
    }),
    EditData: build.mutation({
      query: ({ id, title, description }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: { title, description },
      }),
      invalidatesTags: ["Update"],
    }),
    GetUniqueData: build.query({
      query: (id) => ({
        url: `/home-detail/${id}`,
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useCreateDataMutation,
  useDeleteDataMutation,
  useEditDataMutation,
  useGetUniqueDataQuery,
} = MainUserApi;
