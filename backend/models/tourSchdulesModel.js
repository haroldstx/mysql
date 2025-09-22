//modelo de tour schedules
const db = require("../db.js");
const Tours = require("./toursModel");

const TourSchedules = db.define(
  "tour_schedules",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tourId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Tours,
        key: "id",
      },
    },
    schedule_time: {
      type: sequelize.DATE,
      allowNull: false,
    },
    available_slots: {
      type: sequelize.INTEGER,
      allowNull: false,
      defaultValue: 20,
    },
  },
  {
    tableName: "tour_schedules",
    timestamps: false,
  }
);
// Relación con el modelo Tours
//   PRIMARY KEY (`id`),
//   KEY `idx_tour_time` (`tour_id`, `schedule_time`),
//   CONSTRAINT `fk_schedule_tour`
//     FOREIGN KEY (`tour_id`) REFERENCES `tours`(`id`)
TourSchedules.belongsTo(Tours, { foreignKey: "tourId" });

module.exports = TourSchedules;
