const express = require("express");
const router = express.Router();

router.get("/auth", function (req, res, next) {
  res.status(200).json({
    message: "Auth route",
  });
});

module.exports = router;
