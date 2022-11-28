import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../helpers/alerts";

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const res = await axios.post("/api/auth", data);
    // callAlert("User created", "success");

    return res.data;
  } catch (error) {
    callAlert(error.response.data.message, "danger");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
