const mongoose = require("mongoose");

const { ObjectId } = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  serviceProvider: {
    type: ObjectId,
    ref: "User",
  },
  serviceCategory: {
    type: ObjectId,
    ref: "Category",
  },
  fee: {
    type: Number,
    required: true,
    min: 0,
    max: 1000,
  },
});

mongoose.model("Service", serviceSchema);
