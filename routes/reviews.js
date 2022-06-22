const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// //Imports
const reviews = mongoose.model("Reviews");
// Response service
const ResponseService = require("../utils/ResponsesService"); 

// Create
router.post("/", async (req, res) => {
  new reviews(req.body).save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

//get all
router.get("/", (req, res) => {
  reviews
    .find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 })
    .populate("addedBy", "name");
});

// Update
router.put("/", async (req, res) => {
  reviews.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "Updated");
  });
});

// Get by id
router.get("/:id", (req, res) => {
  reviews.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  reviews.findByIdAndRemove(req.params.id, (err, doc) => {
    ResponseService.generalResponse(err, res, "Review removed successfully");
  });
});

module.exports = router;
