const express = require("express");
const login = require("../../controllers/auth/login");
const { validate, auth, ctrlWrapper } = require("../../middlewares");
const { loginSchema } = require("../../middlewares/validateSchema");

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json(req.user);
});

router.post("/", validate(loginSchema), ctrlWrapper(login));

module.exports = router;
