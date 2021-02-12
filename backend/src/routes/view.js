// Provide routes for requesting the details of a single board based on its id!!
const { Router } = require("express");
const { body } = require("express-validator");

const viewController = require("../controllers/view");

const router = Router();

router.get("/boardId", viewController.getBoardView);
router.get("/", viewController.getBoardView);

module.exports = router;
