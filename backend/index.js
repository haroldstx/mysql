const express = require("express");
const { sequelize, testConnection } = require("./db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");
const { syncModels } = require("./models/index");
const seedReservations = require("./seeds/reservationsSeeds");
const seedTourSchedules = require("./seeds/tourSchedulesSeeds");
const seedTours = require("./seeds/toursSeeds");
//cors
const cors = require("cors");
app.use(cors());

//middlewares
app.use(express.json());

//espacio para rutas
app.get("/", (req, res) => {
  res.send("API is running en MySQL...");
});
//espacio para sincronizar e iniciar la bd

(async () => {
  try {
    await testConnection();

    if (await syncModels({ alter: true })) {
      await seedTours();
      await seedTourSchedules();
      await seedReservations();
    } else {
      console.log(
        "No se sincronizaron los modelos, por lo que no se ejecutaron los seeds."
      );
    }
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

//iniciar servidor

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await testConnection();
});
