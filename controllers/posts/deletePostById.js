const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const deletePostById = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (!post) {
    throw RequestError(404, "Post is not found");
  }
  if (post.user.toString() !== req.user._id.toString()) {
    throw RequestError(403, "You can't delete a post that isn't your own");
  }

  await post.delete();

  res.status(204).json("Post was removed");
};
module.exports = deletePostById;
