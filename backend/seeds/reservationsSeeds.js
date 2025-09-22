const db = require("../db.js");
const Reservations = require("../models/reservations");

const reservationsData = [
  {
    id: 1,
    TourSchedulesId: 1,
    personName: "María Pérez",
    seats_reserved: 2,
    reserved_at: "2025-08-01 10:00:00",
    status: "CONFIRMED",
  },
];

const seedReservations = async () => {
  try {
    console.log("Seeding reservations...");

    // Insertar las nuevas reservaciones
    await Reservations.bulkCreate(reservationsData);

    console.log("Reservations seeded successfully");
  } catch (error) {
    console.error("Error seeding reservations:", error);
    throw error;
  }
};

module.exports = seedReservations;
