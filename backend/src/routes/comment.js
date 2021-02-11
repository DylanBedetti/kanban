const { Router } = require("express");
const { body } = require("express-validator");

const commentController = require("../controllers/comment");

const router = Router();

router.get("/", commentController.getComments);

router.post(
  "/",
  [
    body("order").trim().isInt(),
    body("content").isString(),
    body("users_id").trim().isInt(),
    body("cards_id").trim().isInt(),
  ],
  commentController.createComment
);

router.put(
  "/:commentId",
  [
    body("order").trim().isInt(),
    body("content").isString(),
    body("users_id").trim().isInt(),
    body("cards_id").trim().isInt(),
  ],
  commentController.editComment
);

router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
