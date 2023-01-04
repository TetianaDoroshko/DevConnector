import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { callAlert } from "../../../helpers/alerts";

export const getPost = createAsyncThunk(
  "post/get",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/posts/${postId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
