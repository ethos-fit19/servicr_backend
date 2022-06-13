const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//DB connect
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

//models
require("./models/user");
require("./models/serviceCategory");
require("./models/service");
require("./models/appointment");
require("./models/earnings");
require("./models/serviceProvider");
require("./models/reviews");

// routes
const authRoutes = require("./routes/auth");
const serviceCategories = require("./routes/serviceCategories");
const serviceRoutes = require("./routes/service");
const appointmentRoutes = require("./routes/appointment");
const earningsRoutes = require("./routes/earnings");
const reviewsRoutes = require("./routes/reviews");


app.use("/api/auth", authRoutes);
app.use("/api/categories", serviceCategories);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/earnings", earningsRoutes);
app.use("/api/reviews", reviewsRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
