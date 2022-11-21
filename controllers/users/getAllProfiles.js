const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const getAllProfiles = async (req, res) => {
  const profiles = await Profile.find().populate("user", "name avatar");

  if (!profiles) {
    throw RequestError(400, "There aren't any profiles");
  }

  res.json(profiles);
};
module.exports = getAllProfiles;
