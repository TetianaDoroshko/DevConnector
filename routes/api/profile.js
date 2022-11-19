const express = require("express");
const { getMyProfile, addProfile } = require("../../controllers");
const { auth, ctrlWrapper, validate } = require("../../middlewares");
const { addProfileSchema } = require("../../middlewares/validateSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Profile route");
});

router.get("/me", auth, ctrlWrapper(getMyProfile));
router.post("/", auth, validate(addProfileSchema), ctrlWrapper(addProfile));

module.exports = router;
