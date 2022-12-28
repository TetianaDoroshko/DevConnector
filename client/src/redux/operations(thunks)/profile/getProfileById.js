import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfileById = createAsyncThunk(
  "profileById/get",
  async (userId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/profile/${userId}`);

      return res.data;
    } catch (error) {
      // callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
