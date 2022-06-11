const mongoose = require("mongoose");

const { ObjectId } = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  service: {
    type: ObjectId,
    ref: "Service",
  },
  client: {
    type: ObjectId,
    ref: "User",
  },
  serviceProvider: {
    type: ObjectId,
    ref: "User",
  },
  serviceCategory: {
    type: ObjectId,
    ref: "Category",
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
    min: 0,
    max: 1000,
  },
  status: { type: Boolean },
});

mongoose.model("Appointment", appointmentSchema);
