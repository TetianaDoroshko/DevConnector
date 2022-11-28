import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("/api/users", data);
      callAlert("User created", "success");

      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
