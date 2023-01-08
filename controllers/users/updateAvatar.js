const fs = require("fs/promises");
const cloudinary = require("../../helpers/cloudinary");
const { User } = require("../../models");

const updateAvatar = async (req, res, next) => {
  const { _id, avatarId } = req.user;

  const { path } = req.file;

  const result = await cloudinary.uploader.upload(path, {
    gravity: "auto:face",
    height: 250,
    width: 250,
    crop: "fill",
    folder: "avatars",
  });
  if (avatarId) {
    await cloudinary.uploader.destroy(avatarId);
  }
  const user = await User.findByIdAndUpdate(
    _id,
    { avatar: result.url, avatarId: result.public_id },
    { new: true }
  );
  await fs.unlink(path);
  res.json({
    avatar: result.url,
    avatarId: result.public_id,
  });
};
module.exports = updateAvatar;
