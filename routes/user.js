const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Imports
const user = mongoose.model("User");
const ResponseService = require("../utils/ResponsesService"); // Response service

// Create
// router.post("/", async (req, res) => {
//   new user(req.body).save((err, doc) => {
//     ResponseService.generalPayloadResponse(err, doc, res);
//   });
// });

//get all
router.get("/", (req, res) => {
  user
    .find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 });
});

// Update
router.put("/:id", async (req, res) => {
  user.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "User updated");
  });
});

router.patch("/:id", async (req, res) => {
  console.log(req.params.id);
  user.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "User updated");
  });
});

// Get by id
router.get("/:id", (req, res) => {
  user.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  user.findByIdAndRemove(req.body.id, (err, doc) => {
    ResponseService.generalResponse(err, res, "User removed");
  });
});

module.exports = router;
