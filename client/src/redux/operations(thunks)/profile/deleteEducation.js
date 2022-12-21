import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const deleteEducation = createAsyncThunk(
  "education/delete",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/profile/education/${id}`);
      callAlert("Education was removed successfully", "success");
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
