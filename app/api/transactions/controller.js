const { Transaction, DetailTransaction } = require("../../db/models");
const { Op } = require("sequelize");

module.exports = {
  getTransactionList: async (req, res, next) => {
    try {
      const { keyword = "" } = req.query;

      let condition = {
        user: req.user.id,
      };

      if (keyword !== "") {
        condition = { ...condition, invoice: { [Op.like]: `%${keyword}%` } };
      }

      const transaction = await Transaction.findAll({
        where: condition,
        include: {
          model: DetailTransaction,
          as: "detailTransaction",
        },
      });

      res.status(200).json({
        message: "Success get all transaction",
        data: transaction,
      });
    } catch (err) {
      next(err);
    }
  },
};
