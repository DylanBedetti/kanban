const { validationResult } = require("express-validator/check");
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

// exports.createBoard = (req, res, next) => {

// }
