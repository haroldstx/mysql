//model reservations
const { sequelize: db } = require("../db.js");
const sequelize = require("sequelize");
const TourSchedules = require("./tourSchdulesModel");

const Reservations = db.define(
  "reservations",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tour_schedule_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: TourSchedules,
        key: "id",
      },
    },
    person_name: {
      type: sequelize.STRING(150),
      allowNull: false,
    },
    seats_reserved: {
      type: sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    reserved_at: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    status: {
      type: sequelize.STRING(50),
      allowNull: false,
      defaultValue: "confirmed",
    },
  },
  {
    tableName: "reservations",
    timestamps: false,
  }
);

//RELACION CON TOUR SCHEDULES and TOURS
Reservations.belongsTo(TourSchedules, { foreignKey: "tour_schedule_id" });

module.exports = Reservations;
