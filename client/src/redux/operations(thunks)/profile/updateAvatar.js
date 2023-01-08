import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const updateAvatar = createAsyncThunk(
  "avatar/add",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch("/api/profile/avatar", formData);
      //   callAlert("Experience added success", "success");
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
