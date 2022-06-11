const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Appointment = mongoose.model("Appointment");

router.get("/", async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort("_id");
    res.send(appointments);
  } catch (ex) {
    next(ex);
  }
});

router.post("/create", async (req, res, next) => {
  const {
    service,
    client,
    // serviceProvider,
    serviceCategory,
    address,
    date,
    price,
    status,
  } = req.body;

  //   if (!title || !serviceProvider || !serviceCategory || !fee) {
  //     return res.status(422).json({ error: "Add all the fields" });
  //   }
  const appointment = new Appointment({
    service,
    client,
    // serviceProvider,
    serviceCategory,
    address,
    date,
    price,
    status,
  });
  console.log(appointment);
  appointment
    .save()
    .then((result) => {
      res.json({ appointment: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
