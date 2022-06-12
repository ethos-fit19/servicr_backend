const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
  },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
  },
  address: {
    type: String,
  },
  date: {
    type: Date,
  },
  price: {
    type: Number,
    required: true,
    // min: 0,
    // max: 1000,
  },
  status: { type: Boolean , default:false},
});

mongoose.model("Appointment", appointmentSchema);
