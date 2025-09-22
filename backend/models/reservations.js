const db = require("../db.js");
const TourSchedules = require("./tourSchdulesModel");

const Reservations = db.define(
  "reservations",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TourSchedulesId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: TourSchedules,
        key: "id",
      },
    },
    personName: {
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
Reservations.belongsTo(TourSchedules, { foreignKey: "TourSchedulesId" });

module.exports = Reservations;
