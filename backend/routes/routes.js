///tour/rutas.js
const express = require("express");
const router = express.Router();
const tourRoutes = require("./routesTours");

router.use("/tours", tourRoutes);

module.exports = router;
