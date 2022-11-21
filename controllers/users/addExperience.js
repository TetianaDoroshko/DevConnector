const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const addExperience = async (req, res) => {
  const { _id } = req.user;
  const { title, company, location, from, to, current, description } = req.body;

  let newExp = {
    title,
    company,
    from,
  };
  if (location) newExp.location = location;
  if (to) newExp.to = to;
  if (current) newExp.current = current;
  if (description) newExp.description = description;

  let profile = await Profile.findOne({ user: _id });

  if (!profile) {
    throw RequestError(400, "There isn't a profile for this user");
  }
  profile.experience.unshift(newExp);
  await profile.save();

  res.json(profile);
};
module.exports = addExperience;
