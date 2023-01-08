import { createSlice } from "@reduxjs/toolkit";
import {
  getProfile,
  addProfile,
  logout,
  addExperience,
  addEducation,
  deleteExperience,
  deleteEducation,
  deleteAccount,
  getAllProfiles,
  getProfileById,
  getGitRepos,
  updateAvatar,
} from "./operations(thunks)";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: false,
  error: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  extraReducers: {
    [logout.fulfilled]: (state, { payload }) => {
      state.profile = null;
      state.repos = [];
    },
    [getProfile.pending]: (state, { payload }) => {
      state.profile = null;
      state.loading = true;
      state.error = false;
    },
    [getProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [getProfile.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addProfile.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [addProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [addProfile.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addExperience.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [addExperience.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [addExperience.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addEducation.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [addEducation.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [addEducation.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deleteExperience.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [deleteExperience.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [deleteExperience.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deleteEducation.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = false;
    },
    [deleteEducation.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [deleteEducation.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deleteAccount.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [deleteAccount.fulfilled]: (state) => {
      state.profile = null;
      state.loading = false;
    },
    [deleteAccount.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // get all profiles
    [getAllProfiles.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAllProfiles.fulfilled]: (state, { payload }) => {
      state.profiles = payload;
      state.loading = false;
    },
    [getAllProfiles.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // get profile by id
    [getProfileById.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getProfileById.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    [getProfileById.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // get Git repositories
    [getGitRepos.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getGitRepos.fulfilled]: (state, { payload }) => {
      state.repos = payload;
      state.loading = false;
    },
    [getGitRepos.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // update avatar
    [updateAvatar.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateAvatar.fulfilled]: (state, { payload }) => {
      state.profile.user.avatar = payload.avatar;
      state.profile.user.avatarId = payload.avatarId;
      state.loading = false;
    },
    [updateAvatar.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const profileReducer = profileSlice.reducer;
