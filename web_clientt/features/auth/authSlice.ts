import { createSlice } from "@reduxjs/toolkit";
import { cookies } from "pages/_app";
const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      cookies.set("Authorization", `Bearer ${token}`, {
        // httpOnly: true, //when enabled, its not setting the cookie
        sameSite: "strict",
        secure: true,
        path: "/",
        // encode: (val) => val, //prevent url encode
      });
    },
    logOut: (state, action) => {},
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.username;
// export const selectCurrentToken = (state) => state.auth.token;
