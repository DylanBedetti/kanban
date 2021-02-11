const { validationResult } = require("express-validator");
const { ValidationFailed } = require("../utils/errors");
const { Op } = require("sequelize");
const List = require("../models/List");

exports.getLists = (req, res, next) => {
  List.findAll()
    .then((lists) => {
      res
        .status(200)
        .json({ message: "Fetched lists successfully.", lists: lists });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createList = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const { order, title, users_id, boards_id } = req.body;

  List.create({ order, title, users_id, boards_id })
    .then((result) => {
      res
        .status(201)
        .json({ message: "List Created", list: result.dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editList = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const listId = req.params.listId;
  const { order, title, users_id, boards_id } = req.body;

  List.update(
    { order, title, users_id, boards_id },
    { where: { id: listId }, returning: true }
  )
    .then((result) => {
      res
        .status(200)
        .json({ message: "List Updated", list: result[1][0].dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteList = (req, res, next) => {
  const listId = req.params.listId;

  List.destroy({ where: { id: listId } })
    .then((result) => {
      res.status(200).json({ message: "List Deleted" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
