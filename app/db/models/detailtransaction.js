"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DetailTransaction.belongsTo(models.Transaction, {
        foreignKey: "transaction",
      });
    }
  }
  DetailTransaction.init(
    {
      transaction: DataTypes.INTEGER,
      user: DataTypes.INTEGER,
      book: DataTypes.INTEGER,
      titleBook: DataTypes.STRING,
      imageBook: DataTypes.STRING,
      priceBook: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DetailTransaction",
    }
  );
  return DetailTransaction;
};
