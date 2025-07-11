const express = require("express");
const router = express.Router();
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares")

router.post("/", AirplaneMiddlewares.validationCreateRequest, AirplaneController.createAirplane);

module.exports = router;