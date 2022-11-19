const login = require("./auth/login");
const register = require("./auth/register");

const getMyProfile = require("./users/getMyProfile");
const addProfile = require("./users/addProfile");

module.exports = {
  login,
  register,
  getMyProfile,
  addProfile,
};
