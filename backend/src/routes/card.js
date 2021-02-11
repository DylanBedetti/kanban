const { Router } = require("express");
const { body } = require("express-validator");

const cardController = require("../controllers/card");

const router = Router();

router.get("/", cardController.getCards);

router.post(
  "/",
  [
    body("order").trim().isInt(),
    body("title").trim().isLength({ min: 3 }),
    body("description").isString(),
    body("due_date").optional().isDate(),
    body("users_id").trim().isInt(),
    body("lists_id").trim().isInt(),
  ],
  cardController.createCard
);

router.put(
  "/:cardId",
  [
    body("order").trim().isInt(),
    body("title").trim().isLength({ min: 3 }),
    body("description").isString(),
    body("due_date").optional().isDate(),
    body("users_id").trim().isInt(),
    body("lists_id").trim().isInt(),
  ],
  cardController.editCard
);

router.delete("/:cardId", cardController.deleteCard);

module.exports = router;
