var express = require("express");
var router = express.Router();
var authService = require("../auth/auth");
var apiRouter = require("./api.routes");

router.use("/", authService);
router.use("/api", apiRouter);

module.exports = router;
