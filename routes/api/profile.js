const express = require("express");
const {
  getMyProfile,
  addProfile,
  addExperience,
  deleteExperience,
  getAllProfiles,
  getProfileByUserId,
  deleteMyProfile,
} = require("../../controllers");
const { auth, ctrlWrapper, validate, isValidId } = require("../../middlewares");
const {
  addProfileSchema,
  addExperienceSchema,
} = require("../../middlewares/validateSchema");
const router = express.Router();

router.get("/me", auth, ctrlWrapper(getMyProfile));
router.post("/", auth, validate(addProfileSchema), ctrlWrapper(addProfile));
router.patch(
  "/experience",
  auth,
  validate(addExperienceSchema),
  ctrlWrapper(addExperience)
);
router.delete(
  "/experience/:id",
  auth,
  isValidId,
  ctrlWrapper(deleteExperience)
);
router.get("/", ctrlWrapper(getAllProfiles));
router.get("/:id", isValidId, ctrlWrapper(getProfileByUserId));
router.delete("/", auth, ctrlWrapper(deleteMyProfile));

module.exports = router;
