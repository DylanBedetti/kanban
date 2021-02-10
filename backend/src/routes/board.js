const { Router } = require("express");
const { body } = require("express-validator/check");

const boardController = require("../controllers/board");

const router = Router();

router.get("/boards", boardController.getBoards);

router.post(
  "/boards",
  [
    body("name").trim().isLength({ min: 3 }),
    body("backgroundImage").optional().trim().isURL(),
    body("users_id").trim().isInt(),
  ],
  boardController.createBoard
);

// :boardId is accessible in req.params.boardId
//  when updating, expect all of the required columsn to be provided - don't just do it on a difference basis
router.put(
  "/boards/:boardId",
  [
    body("name").trim().isLength({ min: 3 }),
    body("backgroundImage").trim().isURL(),
    body("users_id").trim().isInt(),
  ],
  boardController.editBoard
);

router.delete("/boards/:boardId", boardController.deleteBoard);

module.exports = router;
