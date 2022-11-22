const { validationResult } = require("express-validator");
const RequestError = require("../helpers/RequestError");

const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    next(RequestError(400, `Validation error. ${errors.errors[0].msg}`));
  };
};

module.exports = validate;
