const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const deleteCommentPost = async (req, res) => {
  const { id, commentId } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    throw RequestError(404, "Post is not found");
  }

  const comment = post.comments.find(
    (comment) => comment._id.toString() === commentId.toString()
  );
  if (!comment) {
    throw RequestError(404, "Comment is not found");
  }
  if (comment.user.toString() !== req.user._id.toString()) {
    throw RequestError(403, "You can't delete a comment that isn't your own");
  }

  post.comments = post.comments.filter(
    (comment) => comment._id.toString() !== commentId.toString()
  );

  await post.save();

  res.json(post.comments);
};
module.exports = deleteCommentPost;
