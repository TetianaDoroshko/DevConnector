const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const addEducation = async (req, res) => {
  const { _id } = req.user;
  const { school, degree, fieldofstudy, from, to, current, description } =
    req.body;

  let newEdu = {
    school,
    degree,
    fieldofstudy,
    from,
  };
  if (to) newEdu.to = to;
  if (current) newEdu.current = current;
  if (description) newEdu.description = description;

  let profile = await Profile.findOne({ user: _id });

  if (!profile) {
    throw RequestError(400, "There isn't a profile for this user");
  }
  profile.education.unshift(newEdu);
  await profile.save();

  res.json(profile);
};
module.exports = addEducation;
