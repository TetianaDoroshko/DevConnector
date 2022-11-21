const login = require("./auth/login");
const register = require("./auth/register");

const getMyProfile = require("./users/getMyProfile");
const addProfile = require("./users/addProfile");
const addExperience = require("./users/addExperience");
const deleteExperience = require("./users/deleteExperience");

const getAllProfiles = require("./users/getAllProfiles");
const getProfileByUserId = require("./users/getProfileByUserId");
const deleteMyProfile = require("./users/deleteMyProfile");

module.exports = {
  login,
  register,
  getMyProfile,
  addProfile,
  addExperience,
  getAllProfiles,
  getProfileByUserId,
  deleteMyProfile,
  deleteExperience,
};
