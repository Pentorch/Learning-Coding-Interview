const express = require("express");
const { auth } = require("../../middlewares/auth");
const { getAllCategories, createCategory } = require("./controller");
const router = express.Router();

router.get("/categories", auth, getAllCategories);
router.post("/categories", auth, createCategory);

module.exports = router;
