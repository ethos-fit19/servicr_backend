
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


//Imports
const appointment  = mongoose.model("Appointment");//appointment 
const ResponseService = require('../utils/ResponsesService'); // Response service

// Create
router.post("/", async (req, res) => {
    new appointment (req.body).save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

//get all
router.get('/', (req, res) => {
    appointment .find((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});

// Update
router.put("/", async (req, res) => {
    
    appointment .findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
});

// Get by id
router.get('/:id', (req, res) => {
    appointment .findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    appointment .findByIdAndRemove(req.body.id, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});

//get by servicer
router.get('/servicer/:id', (req, res) => {
    appointment.find({serviceProvider : req.params.id},(err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});



module.exports=router;















































































































































































