const express = require("express");
const { auth } = require("../../middlewares/auth");
const {
  getAllCategories,
  createCategories,
  updateCategories,
} = require("./controller");
const router = express.Router();

router.get("/categories", auth, getAllCategories);
router.post("/categories", auth, createCategories);
router.patch("/categories/:id", auth, updateCategories);

module.exports = router;
