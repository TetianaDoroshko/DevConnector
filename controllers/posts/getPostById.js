const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (!post) {
    throw RequestError(404, "Post is not found");
  }
  res.json(post);
};
module.exports = getPostById;
