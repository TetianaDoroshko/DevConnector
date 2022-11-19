const express = require("express");

const router = express.Router();

const register = require("../../controllers/auth/register");
const { ctrlWrapper, validate } = require("../../middlewares");
const { registerSchema } = require("../../middlewares/validateSchema");

router.post("/", validate(registerSchema), ctrlWrapper(register));

module.exports = router;
