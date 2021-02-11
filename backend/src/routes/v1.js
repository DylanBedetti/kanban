const { Router } = require("express");
const authRoutes = require("./auth");
const boardRoutes = require("./board");
const listRoutes = require("./list");

const router = Router();
router.use("/auth", authRoutes);
router.use("/boards", boardRoutes);
router.use("/lists", listRoutes);

module.exports = router;
