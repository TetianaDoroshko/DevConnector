const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const getProfileByUserId = async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findOne({ user: id }).populate(
    "user",
    "name avatar"
  );

  if (!profile) {
    throw RequestError(400, "There isn't a profile for this user");
  }

  res.json(profile);
};
module.exports = getProfileByUserId;
