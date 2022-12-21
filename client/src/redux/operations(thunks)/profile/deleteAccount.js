import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const deleteAccount = createAsyncThunk(
  "account/delete",
  async (_, thunkAPI) => {
    try {
      await axios.delete("/api/profile/");
      callAlert("Your account has been permanently removed");
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
