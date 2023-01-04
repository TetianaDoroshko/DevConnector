import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  addPost,
  deleteComment,
  deletePost,
  getPost,
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
    // get posts
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
    // like post
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
    // unlike post
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
    // add post
    [addPost.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.posts.unshift(payload);
      state.loading = false;
    },
    [addPost.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // delete post
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
    // get post by id
    [getPost.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
      state.loading = false;
    },
    [getPost.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // add comment to post
    [addComment.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.post.comments = payload;
      state.loading = false;
    },
    [addComment.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // delete comment from post
    [deleteComment.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.post.comments = payload;
      state.loading = false;
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const postReducer = postSlice.reducer;
