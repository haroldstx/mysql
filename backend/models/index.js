//index para sincronizar
const { sequelize: db } = require("../db");

const Tours = require("./toursModel");

const TourSchedules = require("./tourSchdulesModel");

const Reservations = require("./reservations");

// Sincronizar los modelos con la base de datos

const syncModels = async (options = {}) => {
  try {
    await db.authenticate();

    console.log("Conexión a la base de datos establecida correctamente.");

    // Sincronizar los modelos

    await Tours.sync(options);

    await TourSchedules.sync(options);

    await Reservations.sync(options);

    console.log("Modelos sincronizados correctamente.");
  } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
  }
};

module.exports = {
  Tours,

  TourSchedules,

  Reservations,

  syncModels,
};
