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

//  when updating, expect all of the required columsn to be provided - don't just do it on a difference basis
// router.put("/boards/:boardId", [
//   body("name").optional().trim().isLength({ min: 3 }),
//   body("backgroundImage").optional().trim().isURL(),
//   body("users_id").optional().trim().isInt(),
// ]);

router.delete("/boards/:boardId");

module.exports = router;
