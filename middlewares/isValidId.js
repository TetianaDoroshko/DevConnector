const { isValidObjectId } = require("mongoose");
const RequestError = require("../helpers/RequestError");

const isValidId = (req, res, next) => {
  const { id, commentId } = req.params;
  if (!isValidObjectId(id) || (commentId && !isValidObjectId(commentId))) {
    next(RequestError(400, "Invalid ID"));
  } else {
    next();
  }
};

module.exports = isValidId;
