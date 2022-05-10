const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
const controller = require("./controller");

router.get("/books", auth, controller.getAllBooks);
// router.post("/categories", auth, createCategories);
// router.patch("/categories/:id", auth, updateCategories);
// router.delete("/categories/:id", auth, deleteCategories);

module.exports = router;
