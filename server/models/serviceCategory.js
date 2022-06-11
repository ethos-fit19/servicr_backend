const mongoose = require("mongoose");

const serviceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
});

const ServiceCategory = mongoose.model(
  "ServiceCategory",
  serviceCategorySchema
);
