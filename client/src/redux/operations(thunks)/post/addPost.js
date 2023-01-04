import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";

export const addPost = createAsyncThunk("post/add", async (text, thunkAPI) => {
  try {
    const res = await axios.post("/api/posts", { text });
    callAlert("New Post was created successfully", "success");

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
