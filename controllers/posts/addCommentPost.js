const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const addCommentPost = async (req, res) => {
  const { id } = req.params;
  const { name, avatar, _id } = req.user;
  const { text } = req.body;

  const post = await Post.findById(id);

  if (!post) {
    throw RequestError(404, "Post is not found");
  }

  const newComment = {
    text,
    name,
    avatar,
    user: _id,
  };

  post.comments.unshift(newComment);

  await post.save();

  res.json(post.comments);
};
module.exports = addCommentPost;
