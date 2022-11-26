import { createSlice } from "@reduxjs/toolkit";
// import { register } from "./register";

const alertSlice = createSlice({
  name: "alert",
  initialState: [],
  reducers: {
    setAlert(state, { payload }) {
      console.log("setalert reducer");
      return [...state, payload];
    },
    removeAlert(state, { payload }) {
      return state.filter((alert) => alert.id !== payload.id);
    },
  },
  extraReducers: {
  },
});

export const alertReduser = alertSlice.reducer;
export const { setAlert, removeAlert } = alertSlice.actions;
