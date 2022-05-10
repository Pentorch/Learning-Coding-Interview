const express = require("express");
const { auth } = require("../../middlewares/auth");
const {
  getAllCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("./controller");
const router = express.Router();

router.get("/categories", auth, getAllCategories);
router.post("/categories", auth, createCategories);
router.patch("/categories/:id", auth, updateCategories);
router.delete("/categories/:id", auth, deleteCategories);

module.exports = router;
