const { Category } = require("../../db/models");

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      const categories = await Category.findAll({
        where: { user: req.user.id },
        attributes: ["id", "name"],
      });

      res.status(200).json({
        message: "Success get all categories",
        data: categories,
      });
    } catch (err) {
      next(err);
    }
  },
};
