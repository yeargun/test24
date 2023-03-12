import { apiSlice } from "utils/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
