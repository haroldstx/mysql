//routas tour
const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

router.get("/", tourController.getTours);
router.get("/available", tourController.getAvailableTours);
router.post("/reserve", tourController.reserveTour);

module.exports = router;
