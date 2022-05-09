const express = require("express");
const { auth } = require("../../middlewares/auth");
const { getAllCategories } = require("./controller");
const router = express.Router();

router.get("/categories", auth, getAllCategories);

module.exports = router;
