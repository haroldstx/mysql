const TourSchedules = require("../models/tourSchdulesModel");
const db = require("../db.js");

const tourSchedulesData = [
  {
    id: 1,
    tour_id: 1,
    schedule_time: "2025-09-25 09:00:00",
    seats_available: 20,
  },
  {
    id: 2,
    tour_id: 1,
    schedule_time: "2025-09-26 14:00:00",
    seats_available: 20,
  },
  {
    id: 3,
    tour_id: 2,
    schedule_time: "2025-09-25 17:30:00",
    seats_available: 30,
  },
  {
    id: 4,
    tour_id: 3,
    schedule_time: "2025-09-27 06:00:00",
    seats_available: 15,
  },
  {
    id: 5,
    tour_id: 3,
    schedule_time: "2025-09-28 06:00:00",
    seats_available: 15,
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
