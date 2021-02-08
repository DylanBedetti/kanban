const User = require("../models/User");
const { validationResult } = require("express-validator/check");
const { ValidationFailed } = require("../utils/errors");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const { email, password, firstName, lastName } = req.body;

  User.create({ email, password, firstName, lastName })
    .then((result) => {
      res.status(201).json({ message: "User Created", id: result.id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// exports.signup = (req, res next) => {

// }
