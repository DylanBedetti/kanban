const User = require("../models/User");
const { validationResult } = require("express-validator");
const { ValidationFailed, Unauthorized } = require("../utils/errors");
const { Op } = require("sequelize");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const { email, password, firstName, lastName, profilePhoto } = req.body;

  User.create({ email, password, firstName, lastName, profilePhoto })
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

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findAll({
    where: {
      email: {
        [Op.eq]: email,
      },
    },
  })
    .then((user) => {
      if (!user.length) {
        throw new Unauthorized("No user exists");
      }

      if (user[0].dataValues.email !== email) {
        throw new Unauthorized("Incorrect email");
      }

      if (user[0].dataValues.password === password) {
        res.status(200).json({
          message: "user logged in successfully",
          id: user[0].dataValues.id,
        });
      } else {
        throw new Unauthorized("Password incorrect");
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
