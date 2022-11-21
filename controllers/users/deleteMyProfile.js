const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const deleteMyProfile = async (req, res) => {
  const { _id } = req.user;
  await Profile.findOneAndDelete({ user: _id });
  await User.findOneAndDelete({ _id });
  //TODO - remove user's posts

  res.status(204).json("User was removed");
};
module.exports = deleteMyProfile;
