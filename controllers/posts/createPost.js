const RequestError = require("../../helpers/RequestError");
const { Post } = require("../../models");

const createPost = async (req, res) => {
  const { _id, name, avatar } = req.user;

  const { text } = req.body;

  const newPost = {
    user: _id,
    text,
    name,
    avatar,
  };

  const post = await Post.create(newPost);

  res.json(post);
};
module.exports = createPost;
