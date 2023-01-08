const login = require("./auth/login");
const register = require("./auth/register");

const getMyProfile = require("./users/getMyProfile");
const addProfile = require("./users/addProfile");
const addExperience = require("./users/addExperience");
const deleteExperience = require("./users/deleteExperience");
const addEducation = require("./users/addEducation");
const deleteEducation = require("./users/deleteEducation");
const getGitRepos = require("./users/getGitRepos");
const getAllProfiles = require("./users/getAllProfiles");
const getProfileByUserId = require("./users/getProfileByUserId");
const deleteMyProfile = require("./users/deleteMyProfile");
const updateAvatar = require("./users/updateAvatar");
const getAvatarById = require("./users/getAvatarById");

const getAllPosts = require("./posts/getAllPosts");
const createPost = require("./posts/createPost");
const getPostById = require("./posts/getPostById");
const deletePostById = require("./posts/deletePostById");
const likePost = require("./posts/likePost");
const unlikePost = require("./posts/unlikePost");
const addCommentPost = require("./posts/addCommentPost");
const deleteCommentPost = require("./posts/deleteCommentPost");

module.exports = {
  login,
  register,
  getMyProfile,
  addProfile,
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
  getGitRepos,
  getAllProfiles,
  getProfileByUserId,
  deleteMyProfile,
  updateAvatar,
  getAvatarById,
  getAllPosts,
  createPost,
  getPostById,
  deletePostById,
  likePost,
  unlikePost,
  addCommentPost,
  deleteCommentPost,
};
