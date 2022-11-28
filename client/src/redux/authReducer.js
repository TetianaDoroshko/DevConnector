import { createSlice } from "@reduxjs/toolkit";
import { register, refreshToken, login, logout } from "./operations(thunks)";

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
    [register.pending]: (store, { payload }) => {
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
    [register.rejected]: (store, { payload }) => {
      store.loading = false;
    },
    //// refresh
    [refreshToken.pending]: (store, { payload }) => {
      // store.token = null;
      store.loading = true;
    },
    [refreshToken.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      // store.token = payload.token;
      store.isAuthenticated = true;
      store.loading = false;
    },
    [refreshToken.rejected]: (store, { payload }) => {
      localStorage.removeItem("token");
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = false;
    },
    ////// login
    [login.pending]: (store, { payload }) => {
      localStorage.removeItem("token");
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = true;
    },
    [login.fulfilled]: (store, { payload }) => {
      localStorage.setItem("token", payload.token);
      store.user = payload.user;
      store.token = payload.token;
      store.isAuthenticated = true;
      store.loading = false;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
    },
    // logout
    [logout.fulfilled]: (store, { payload }) => {
      store.user = null;
      store.token = null;
      store.isAuthenticated = false;
      store.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
