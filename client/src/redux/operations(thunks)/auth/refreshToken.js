import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { callAlert } from "../../helpers/alerts";
import { setAuthToken } from "../../../helpers/setAuthToken";

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (data, thunkAPI) => {
    console.log("refreshToken starts");
    setAuthToken(data);
    try {
      const res = await axios.get("/api/auth");
      // callAlert("User created", "success");

      return res.data;
    } catch (error) {
      // callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
