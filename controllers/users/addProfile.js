const RequestError = require("../../helpers/RequestError");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const createProfile = async (req, res) => {
  const { _id } = req.user;
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  let newProfile = {
    user: _id,
    status,
    skills: skills.split(",").map((skill) => skill.trim()),
  };
  if (company) newProfile.company = company;
  if (website) newProfile.website = website;
  if (location) newProfile.location = location;
  if (bio) newProfile.bio = bio;
  if (githubusername) newProfile.githubusername = githubusername;
  newProfile.social = {};
  if (youtube) newProfile.social.youtube = youtube;
  if (twitter) newProfile.social.twitter = twitter;
  if (facebook) newProfile.social.facebook = facebook;
  if (linkedin) newProfile.social.linkedin = linkedin;
  if (instagram) newProfile.social.instagram = instagram;

  let profile = await Profile.findOne({ user: _id });

  if (profile) {
    profile = await Profile.findByIdAndUpdate(profile._id, newProfile, {
      new: true,
    });
    return res.json(profile);
  }
  profile = await Profile.create(newProfile);
  return res.json(profile);
};
module.exports = createProfile;
