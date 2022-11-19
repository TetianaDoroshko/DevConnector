const jwt = require("jsonwebtoken");
const RequestError = require("../helpers/RequestError");
const User = require("../models/User");

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw RequestError(401, "No token, authorization denied");
    }
    const { _id } = jwt.verify(token, secret);
    const user = await User.findById(_id).select("-password");
    if (!user || user.token !== token) {
      throw RequestError(401, "Invalid token, authorization denied");
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "invalid signature") {
      //error of jwt verifying
      error.status = 401;
      error.message = "Invalid token, authorization denied";
    }
    next(error);
  }
};

module.exports = auth;
