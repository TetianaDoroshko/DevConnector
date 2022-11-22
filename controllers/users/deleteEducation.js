const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const deleteEducation = async (req, res) => {
  const { id } = req.params;

  const profile = await Profile.findOne({ user: req.user._id });

  profile.education = profile.education.filter((exp) => String(exp._id) !== id);

  await profile.save();

  res.json(profile);
};
module.exports = deleteEducation;
