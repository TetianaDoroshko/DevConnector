import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const addEducation = createAsyncThunk(
  "education/add",
  async (user, thunkAPI) => {
    try {
      const res = await axios.patch("/api/profile/education", user.formData);
      callAlert("Education added success", "success");
      user.navigate();
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
