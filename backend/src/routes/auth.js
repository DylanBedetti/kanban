const { Router } = require("express");
const { body } = require("express-validator/check");

const authController = require("../controllers/auth");

const router = Router();

router.post(
  "/signup",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("firstName").trim().isLength({ min: 3 }),
    body("lastName").trim().isLength({ min: 3 }),
    body("profilePhoto").optional().trim().isURL(),
  ],
  authController.signup
);

router.post("/login", authController.login);

module.exports = router;
