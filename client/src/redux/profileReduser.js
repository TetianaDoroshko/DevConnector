import { createSlice } from "@reduxjs/toolkit";
import { getProfile, logout } from "./operations(thunks)";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    profiles: [],
    repos: [],
    loading: false,
    error: {},
  },
  extraReducers: {
    [logout.fulfilled]: (state, { payload }) => {
      state.profile = null;
      state.repos = [];
    },
    [getProfile.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [getProfile.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const profileReducer = profileSlice.reducer;
