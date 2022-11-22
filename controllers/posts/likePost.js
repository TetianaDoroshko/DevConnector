const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const likePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    throw RequestError(404, "Post is not found");
  }

  const alreadyLikes =
    post.likes.filter(
      (like) => like.user.toString() === req.user._id.toString()
    ).length > 0;
  if (alreadyLikes) {
    throw RequestError(400, "Post has been already liked");
  }

  post.likes.unshift({ user: req.user._id });
  await post.save();

  res.json(post.likes);
};
module.exports = likePost;
