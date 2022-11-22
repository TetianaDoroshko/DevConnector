const express = require("express");
const { auth, validate, ctrlWrapper, isValidId } = require("../../middlewares");
const {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
  likePost,
  unlikePost,
  addCommentPost,
  deleteCommentPost,
} = require("../../controllers");
const { postSchema } = require("../../middlewares/validateSchema");

const router = express.Router();

router.get("/", auth, ctrlWrapper(getAllPosts));
router.post("/", auth, validate(postSchema), ctrlWrapper(createPost));
router.get("/:id", auth, isValidId, ctrlWrapper(getPostById));
router.delete("/:id", auth, isValidId, ctrlWrapper(deletePostById));
router.patch("/:id/like", auth, isValidId, ctrlWrapper(likePost));
router.patch("/:id/unlike", auth, isValidId, ctrlWrapper(unlikePost));
router.patch(
  "/:id/comment",
  auth,
  isValidId,
  validate(postSchema),
  ctrlWrapper(addCommentPost)
);
router.delete(
  "/:id/comment/:commentId",
  auth,
  isValidId,
  ctrlWrapper(deleteCommentPost)
);

module.exports = router;
