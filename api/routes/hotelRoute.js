const express = require("express");
const HotelController = require("../controllers/hotelController");

const hotelRoutes = express.Router();

// Create a new hotel
hotelRoutes.post("/", HotelController.createHotel);

// Get all hotels
hotelRoutes.get("/", HotelController.getAllHotels);

// Update a hotel
hotelRoutes.put("/:id", HotelController.updateHotel);

// Delete a hotel
hotelRoutes.delete("/:id", HotelController.deleteHotel);

// Get a hotel by ID
hotelRoutes.get("/:id", HotelController.findHotelById);

module.exports = hotelRoutes;
