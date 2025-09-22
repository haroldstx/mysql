//controller de tour
const TourSchedules = require("../models/tourSchdulesModel");
const Tours = require("../models/toursModel");
const Reservations = require("../models/reservations");

// Devuelve una lista de tours limitada por el limit y offset.Ambos parámetros tienen un valor por defecto:
// Limit 10
// Offset 0
exports.getTours = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  try {
    const tours = await Tours.findAll({ limit, offset });
    res.json(tours);
  } catch (error) {
    console.error("Error fetching tours:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Devuelve la disponibilidad de los tours en base a la fecha actual, solamente de fechas futuras.Tampoco devuelve las horas que ya han sido reservadas.
exports.getAvailableTours = async (req, res) => {
  const currentDate = new Date();

  try {
    const availableTours = await TourSchedules.findAll({
      where: {
        schedule_time: {
          [Op.gt]: currentDate,
        },
        available_slots: {
          [Op.gt]: 0,
        },
      },
      include: [
        {
          model: Tours,
          required: true,
        },
      ],
    });
    res.json(availableTours);
  } catch (error) {
    console.error("Error fetching available tours:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//POST
// - personName
// - scheduleTime
// - tourId
// Endpoint para reservar un tour a una hora específica. Setea en true la columna reserved. Actualiza la columna reservedBy con el personName.
exports.reserveTour = async (req, res) => {
  const { personName, scheduleTime, tourId } = req.body;

  try {
    // Buscar el horario del tour específico
    const tourSchedule = await TourSchedules.findOne({
      where: {
        tourId,
        schedule_time: scheduleTime,
      },
    });

    if (!tourSchedule) {
      return res.status(404).json({ error: "Tour schedule not found" });
    }

    if (tourSchedule.available_slots <= 0) {
      return res
        .status(400)
        .json({ error: "No available slots for this schedule" });
    }

    // Crear la reserva
    const reservation = await Reservations.create({
      userId: null, // Asumiendo que no hay autenticación de usuario
      TourSchedulesId: tourSchedule.id,
      personName,
      reserved: true,
    });

    // Actualizar los slots disponibles
    tourSchedule.available_slots -= 1;
    await tourSchedule.save();

    res
      .status(201)
      .json({ message: "Tour reserved successfully", reservation });
  } catch (error) {
    console.error("Error reserving tour:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
