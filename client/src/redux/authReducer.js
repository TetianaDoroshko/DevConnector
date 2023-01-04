import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  refreshToken,
  login,
  logout,
  deleteAccount,
} from "./operations(thunks)";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: null,
  },
  extraReducers: {
    // register
    [register.pending]: (store) => {
      localStorage.removeItem("token");
      store.token = null;
      store.isAuthenticated = false;
      store.loading = true;
    },
    [register.fulfilled]: (store, { payload }) => {
      localStorage.setItem("token", payload.token);
      store.user = payload.user;
      store.token = payload.token;
      store.isAuthenticated = true;
      store.loading = false;
    },
    [register.rejected]: (store) => {
      store.loading = false;
    },
    //// refresh
    [refreshToken.pending]: (store) => {
      store.loading = true;
    },
    [refreshToken.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      // store.token = payload.token;
      store.isAuthenticated = true;
      store.loading = false;
    },
    [refreshToken.rejected]: (store) => {
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = false;
    },
    ////// login
    [login.pending]: (store) => {
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = true;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.isAuthenticated = true;
      store.loading = false;
    },
    [login.rejected]: (store) => {
      store.loading = false;
    },
    // logout
    [logout.fulfilled]: (store) => {
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = false;
    },
    // delete account
    [deleteAccount.fulfilled]: (store) => {
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
