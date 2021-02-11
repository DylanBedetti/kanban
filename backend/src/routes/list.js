const { Router } = require("express");
const { body } = require("express-validator");

const listController = require("../controllers/list");

const router = Router();

router.get("/", listController.getLists);

router.post(
  "/",
  [
    body("order").trim().isInt(),
    body("title").trim().isLength({ min: 3 }),
    body("users_id").trim().isInt(),
    body("boards_id").trim().isInt(),
  ],
  listController.createList
);

router.put(
  "/:listId",
  [
    body("order").trim().isInt(),
    body("title").trim().isLength({ min: 3 }),
    body("users_id").trim().isInt(),
    body("boards_id").trim().isInt(),
  ],
  listController.editList
);

router.delete("/:listId", listController.deleteList);

module.exports = router;
