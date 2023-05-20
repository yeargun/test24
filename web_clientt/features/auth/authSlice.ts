import { createSlice } from "@reduxjs/toolkit";
import { cookies } from "pages/_app";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    unauthorized: undefined,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      console.log("token dd", token);
      state.unauthorized = false;
      cookies.set("Authorization", `Bearer ${token}`, {
        sameSite: "strict",
        // this needed for prodution tho, https
        secure: true,
        path: "/",
      });
    },
    setUnauthorized: (state, action) => {
      console.log("action payload this", action.payload);
      state.unauthorized = action.payload;
    },
    logOut: (state, action) => {},
  },
});

export const { setCredentials, logOut, setUnauthorized } = authSlice.actions;
export default authSlice.reducer;
export const isUnauthorizedState = (state) => state.auth.unauthorized;

// export const selectCurrentUser = (state) => state.auth.username;
// export const selectCurrentToken = (state) => state.auth.token;
// export const selectCurrentUser = (state) => state.auth.username;
