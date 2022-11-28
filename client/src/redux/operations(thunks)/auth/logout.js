import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { callAlert } from "../../helpers/alerts";

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    // callAlert(error.response.data.message, "danger");
    // return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
