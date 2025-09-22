//modelo de los tours
const db = require("../db.js");
const sequelize = require("sequelize");

const Tours = db.define(
  "tours",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING(150),
      allowNull: false,
    },
    description: {
      type: sequelize.TEXT(500),
      allowNull: false,
      defaultValue: null,
    },
    price: {
      type: sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    capacity: {
      type: sequelize.INTEGER,
      allowNull: false,
      defaultValue: 20,
    },
  },
  {
    tableName: "tours",
    timestamps: false,
  }
);

module.exports = Tours;
