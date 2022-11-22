const { body } = require("express-validator");

const registerSchema = [
  body("name", "Name is required").rtrim().not().isEmpty(),
  body("email", "Please, include a valid email").isEmail(),
  body(
    "password",
    "Please, enter a password not less then 6 characters"
  ).isLength({ min: 6 }),
];

const loginSchema = [
  body("email", "Please, include a valid email").isEmail(),
  body("password", "Password is required").exists(),
];

const addProfileSchema = [
  body("status", "Status is required").not().isEmpty(),
  body("skills", "Skills is required").not().isEmpty(),
];
const addExperienceSchema = [
  body("title", "Title is required").not().isEmpty(),
  body("company", "Company is required").not().isEmpty(),
  body("from", "From date is required").not().isEmpty(),
];
const addEducationSchema = [
  body("school", "School is required").not().isEmpty(),
  body("degree", "Degree is required").not().isEmpty(),
  body("fieldofstudy", "Field of study is required").not().isEmpty(),
  body("from", "From date is required").not().isEmpty(),
];
const postSchema = [body("text", "Text is required").not().isEmpty()];

module.exports = {
  registerSchema,
  loginSchema,
  addProfileSchema,
  addExperienceSchema,
  addEducationSchema,
  postSchema,
};
