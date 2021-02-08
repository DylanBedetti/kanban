const { Router } = require("express");
const { body } = require("express-validator/check");

const boardController = require("../controllers/board");

const router = Router();

router.get("/boards", boardController.getBoards);

// router.post(
//   "/boards",
//   [body("name").trim().isLength({ min: 3 })],
//   boardController.createBoard
// );

router.put("/boards/:boardId");

router.delete("/boards/:boardId");

module.exports = router;
