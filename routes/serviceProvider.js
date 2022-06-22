const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


//Imports
const serviceProvider = mongoose.model("ServiceProvider"); //Import models
const ResponseService = require("../utils/ResponsesService"); //import  Response service

// Create
router.post("/", async (req, res) => {
  new serviceProvider(req.body).save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

//get all
router.get("/", (req, res) => {
  serviceProvider
    .find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 })
    .populate("serviceProviderID",  "name userType email nic dob gender province city " );
});

// Update
router.put("/", async (req, res) => {
  serviceProvider.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "Updated");
  });
});

// Get by id
router.get("/:id", (req, res) => {
  serviceProvider.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  serviceProvider.findByIdAndRemove(req.params.id, (err, doc) => {
    ResponseService.generalResponse(err, res,
      "Service provider removed successfully"
    );
  });
});

module.exports = router;
