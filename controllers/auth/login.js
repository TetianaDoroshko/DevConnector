const RequestError = require("../../helpers/RequestError");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("login controller");

  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(400, `Invalid credentials`);
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw RequestError(400, `Invalid credentials`);
  }
  console.log(secret);
  const token = jwt.sign({ _id: user._id }, secret, { expiresIn: "1d" });

  const newUser = await User.findByIdAndUpdate(
    user._id,
    { token: token },
    { new: true }
  );

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
    token: newUser.token,
  });
};
module.exports = login;
