const { validationResult } = require("express-validator");
const { ValidationFailed } = require("../utils/errors");
const { Op } = require("sequelize");
const Card = require("../models/Card");

exports.getCards = (req, res, next) => {
  Card.findAll()
    .then((cards) => {
      res
        .status(200)
        .json({ message: "Fetched boards successfully.", cards: cards });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createCard = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const { order, title, description, due_date, users_id, lists_id } = req.body;

  Card.create({ order, title, description, due_date, users_id, lists_id })
    .then((result) => {
      res
        .status(201)
        .json({ message: "Card Created", card: result.dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editCard = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const cardId = req.params.cardId;
  const { order, title, description, due_date, users_id, lists_id } = req.body;

  Card.update(
    { order, title, description, due_date, users_id, lists_id },
    { where: { id: cardId }, returning: true }
  )
    .then((result) => {
      res
        .status(200)
        .json({ message: "Card Updated", card: result[1][0].dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteCard = (req, res, next) => {
  const cardId = req.params.cardId;

  Card.destroy({ where: { id: cardId } })
    .then((result) => {
      res.status(200).json({ message: "Card Deleted" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
