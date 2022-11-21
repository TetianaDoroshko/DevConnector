const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const deleteExperience = async (req, res) => {
  const { id } = req.params;

  const profile = await Profile.findOne({ user: req.user._id });

  debugger;

  profile.experience = profile.experience.filter(
    (exp) => String(exp._id) !== id
  );

  debugger;

  await profile.save();

  res.json(profile);
};
module.exports = deleteExperience;
