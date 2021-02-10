const { validationResult } = require("express-validator");
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
      res
        .status(201)
        .json({ message: "Board Created", board: result.dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editBoard = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const boardId = req.params.boardId;
  const { name, backgroundImage, users_id } = req.body;

  Board.update(
    { name, backgroundImage, users_id },
    { where: { id: boardId }, returning: true }
  )
    .then((result) => {
      res
        .status(200)
        .json({ message: "Board Updated", board: result[1][0].dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteBoard = (req, res, next) => {
  const boardId = req.params.boardId;

  Board.destroy({ where: { id: boardId } })
    .then((result) => {
      res.status(200).json({ message: "Board Deleted" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
