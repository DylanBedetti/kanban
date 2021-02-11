const { Router } = require("express");
const authRoutes = require("./auth");
const boardRoutes = require("./board");
const listRoutes = require("./list");
const cardRoutes = require("./card");

const router = Router();
router.use("/auth", authRoutes);
router.use("/boards", boardRoutes);
router.use("/lists", listRoutes);
router.use("/cards", cardRoutes);

module.exports = router;
