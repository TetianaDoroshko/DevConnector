const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const unlikePost = async (req, res) => {
  const { id } = req.params;
  const authLoading = useSelector;
  const post = await Post.findById(id);

  if (!post) {
    throw RequestError(404, "Post is not found");
  }

  const alreadyLikes =
    post.likes.filter(
      (like) => like.user.toString() === req.user._id.toString()
    ).length > 0;
  if (!alreadyLikes) {
    throw RequestError(400, "Post has not been liked yet");
  }

  post.likes = post.likes.filter(
    (like) => like.user.toString() !== req.user._id.toString()
  );
  await post.save();

  res.json(post.likes);
};
module.exports = unlikePost;
