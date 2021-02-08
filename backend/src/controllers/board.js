const { validationResult } = require("express-validator/check");
const { ValidationFailed } = require("../utils/errors");
const { Op } = require("sequelize");
const Board = require("../models/Board");

exports.getBoards = (req, res, next) => {
  Board.findAll()
    .then((boards) => {
      res
        .status(200)
        .json({ message: "Fetched boards successfully.", boards: boards });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createBoard = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const { name, backgroundImage, users_id } = req.body;

  console.log(name + backgroundImage + users_id);
  Board.create({ name, backgroundImage, users_id })
    .then((result) => {
      res.status(201).json({ message: "Board Created", id: result.id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
