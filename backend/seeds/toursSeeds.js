const Tours = require("../models/toursModel");
const db = require("../db.js");

const toursData = [
  {
    id: 1,
    name: "City Walking Tour",
    description:
      "Recorrido a pie por los puntos históricos de la ciudad. Duración 3 horas.",
    price: 25.0,
    capacity: 20,
  },
  {
    id: 2,
    name: "Sunset Boat Cruise",
    description:
      "Paseo en barco para ver el atardecer con bebidas incluidas. Duración 2 horas.",
    price: 40.0,
    capacity: 30,
  },
  {
    id: 3,
    name: "Jungle Adventure",
    description:
      "Excursión guiada por la selva con canopy y caminatas. Duración 6 horas.",
    price: 75.0,
    capacity: 15,
  },
];

const seedTours = async () => {
  try {
    console.log("Seeding tours...");

    // Insertar los nuevos tours
    await Tours.bulkCreate(toursData);

    console.log("Tours seeded successfully");
  } catch (error) {
    console.error("Error seeding tours:", error);
    throw error;
  }
};

module.exports = seedTours;
