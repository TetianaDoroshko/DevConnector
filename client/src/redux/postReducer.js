import { createSlice } from "@reduxjs/toolkit";
import {
  deletePost,
  getPosts,
  likePost,
  unlikePost,
} from "./operations(thunks)";

const initialState = {
  post: null,
  posts: [],
  loading: false,
  error: {},
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: {
    [getPosts.pending]: (state, { payload }) => {
      state.posts = null;
      state.loading = true;
      state.error = false;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [likePost.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload.postId ? { ...post, likes: payload.likes } : post
      );
      state.loading = false;
    },
    [likePost.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [unlikePost.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [unlikePost.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload.postId ? { ...post, likes: payload.likes } : post
      );
      state.loading = false;
    },
    [unlikePost.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deletePost.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload.postId);
      state.loading = false;
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const postReducer = postSlice.reducer;
