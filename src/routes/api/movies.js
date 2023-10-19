const express = require("express");
const router = express.Router();

const moviesController = require("../../controllers/api/moviesApi")

router.get("/", moviesController.list) 

module.exports = router;