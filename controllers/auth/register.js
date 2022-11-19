const RequestError = require("../../helpers/RequestError");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("register controller");

  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(400, `The user with email ${email} is already exists`);
  }

  const avatar = gravatar.url(email, {
    s: "200",
    r: "pg",
    d: "mm",
  });

  let newUser = await User.create({
    name,
    email,
    avatar,
    password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
  });

  console.log(secret);
  const token = jwt.sign({ _id: newUser._id }, secret, { expiresIn: "1d" });

  newUser = await User.findByIdAndUpdate(
    newUser._id,
    { token: token },
    { new: true }
  );

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
    },
    token: newUser.token,
  });
};
module.exports = register;
