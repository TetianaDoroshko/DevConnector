import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProfiles = createAsyncThunk(
  "profiles/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/profile");

      return res.data;
    } catch (error) {
      // callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
