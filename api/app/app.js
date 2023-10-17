const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("../config/dbConnect");
const hotelRoutes = require("../routes/hotelRoute");

const {
  globalErrorHandler,
  notFound,
} = require("../middlewares/globalErrorHandler");

dotenv.config();
// db connect
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/hotels/", hotelRoutes);

// Not found middleware
app.use(notFound);

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
