const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  res.json(posts);
};
module.exports = getAllPosts;
