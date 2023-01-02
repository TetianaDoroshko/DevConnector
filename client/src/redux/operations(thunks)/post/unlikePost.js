import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const unlikePost = createAsyncThunk(
  "post/unlike",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/posts/${postId}/unlike`);

      return { postId, likes: res.data };
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
