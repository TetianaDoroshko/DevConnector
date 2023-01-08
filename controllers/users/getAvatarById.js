const fs = require("fs/promises");
const cloudinary = require("../../helpers/cloudinary");
const { User } = require("../../models");

const getAvatarById = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    throw RequestError(400, "There isn't a user with this id");
  }

  res.json(user.avatar);
};
module.exports = getAvatarById;
