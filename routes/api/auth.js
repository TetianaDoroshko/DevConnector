const express = require("express");
const login = require("../../controllers/auth/login");
const { validate, auth, ctrlWrapper } = require("../../middlewares");
const { loginSchema } = require("../../middlewares/validateSchema");

const router = express.Router();

router.get("/", auth, (req, res) => {
  const { name, email, avatar, token } = req.user;
  res.json({ user: { name, email, avatar }, token });
}); //refresh token

router.post("/", validate(loginSchema), ctrlWrapper(login));

module.exports = router;
