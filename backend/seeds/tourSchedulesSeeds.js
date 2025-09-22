const TourSchedules = require("../models/tourSchdulesModel");
const db = require("../db.js");

const tourSchedulesData = [
  {
    id: 1,
    tourId: 1,
    schedule_time: "2025-09-25 09:00:00",
    available_slots: 20,
  },
  {
    id: 2,
    tourId: 1,
    schedule_time: "2025-09-26 14:00:00",
    available_slots: 20,
  },
  {
    id: 3,
    tourId: 2,
    schedule_time: "2025-09-25 17:30:00",
    available_slots: 30,
  },
  {
    id: 4,
    tourId: 3,
    schedule_time: "2025-09-27 06:00:00",
    available_slots: 15,
  },
  {
    id: 5,
    tourId: 3,
    schedule_time: "2025-09-28 06:00:00",
    available_slots: 15,
  },
];

const seedTourSchedules = async () => {
  try {
    console.log("Seeding tour schedules...");
    // Insertar los nuevos horarios
    await TourSchedules.bulkCreate(tourSchedulesData);

    console.log("Tour schedules seeded successfully");
  } catch (error) {
    console.error("Error seeding tour schedules:", error);
    throw error;
  }
};

module.exports = seedTourSchedules;
