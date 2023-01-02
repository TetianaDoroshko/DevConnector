import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGitRepos = createAsyncThunk(
  "gitRepos/get",
  async (userName, thunkAPI) => {
    try {
      const res = await axios.get(`/api/profile/github/${userName}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
