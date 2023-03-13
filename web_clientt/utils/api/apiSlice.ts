import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { setCredentials, logOut } from "features/auth/authSlice";
import { cookies } from "pages/_app";
const baseQueryy = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/v1",
  prepareHeaders: (headers, { getState }) => {
    const bearerToken = cookies.get("Authorization");
    if (bearerToken) {
      console.log("cokieden alinmis token ", bearerToken);
      headers.set("Authorization", bearerToken);
    }
    return headers;
  },
  credentials: "include",
});

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.withCredentials = true;
// const baseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = {
//       baseUrl: "http://localhost:8080/api/v1",
//     }
//   ): BaseQueryFn<
//     {
//       url: string;
//       method: AxiosRequestConfig["method"];
//       data?: AxiosRequestConfig["data"];
//       params?: AxiosRequestConfig["params"];
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params }) => {
//     try {
//       debugger;
//       const result = await axios({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         withCredentials: true,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError as AxiosError;
//       console.log("got this er", err);
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQueryy(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh tokeddn");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      //   const user = api.getState().auth.user;

      api.dispatch(setCredentials({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryy,
  endpoints: (builder) => ({}),
});
