import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { callAlert } from "../../../helpers/alerts";

export const getGitRepos = createAsyncThunk(
  "gitRepos/get",
  async (userName, thunkAPI) => {
    try {
      const res = await axios.get(`/api/profile/github/${userName}`);

      return res.data;
    } catch (error) {
      // callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
