const { validationResult } = require("express-validator");
const { ValidationFailed } = require("../utils/errors");
const { Op } = require("sequelize");
const Comment = require("../models/Comment");

exports.getComments = (req, res, next) => {
  Comment.findAll()
    .then((comments) => {
      res.status(200).json({
        message: "Fetched comments successfully.",
        comments: comments,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createComment = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const { order, content, users_id, cards_id } = req.body;

  Comment.create({ order, content, users_id, cards_id })
    .then((result) => {
      res
        .status(201)
        .json({ message: "Comment Created", comment: result.dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editComment = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationFailed(errors.array());
  }

  const commentId = req.params.commentId;
  const { order, content, users_id, cards_id } = req.body;

  Comment.update(
    { order, content, users_id, cards_id },
    { where: { id: commentId }, returning: true }
  )
    .then((result) => {
      res
        .status(200)
        .json({ message: "Comment Updated", comment: result[1][0].dataValues });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteComment = (req, res, next) => {
  const commentId = req.params.commentId;

  Comment.destroy({ where: { id: commentId } })
    .then((result) => {
      res.status(200).json({ message: "Comment Deleted" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
