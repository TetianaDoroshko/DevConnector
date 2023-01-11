import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { setAuthToken } from "../../../helpers/setAuthToken";
import { BASE_URL } from "../../../helpers/variables";

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth`, data);
    // callAlert("User created", "success");
    setAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    callAlert(error.response.data.message, "danger");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
