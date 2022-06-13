const express = require('express');
const router = express.Router();

//Imports
const serviceProvider = require('../models/serviceProvider');//Folder Model
const ResponseService = require('../utils/ResponsesService'); // Response service

// Create
router.post("/", async (req, res) => {
    new serviceProvider(req.body).save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

//get all
router.get('/', (req, res) => {
    serviceProvider.find((err, doc) => {
        ResponseService.generalPayloadResponse(err, newPayload, res);
    })
        .sort({ addedOn: -1 })
        .populate('addedBy', 'firstName lastName')
});

// Update
router.put("/:id", async (req, res) => {
    
    serviceProvider.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
});

// Get by id
router.get('/:id', (req, res) => {
    serviceProvider.findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    serviceProvider.findByIdAndRemove(req.body.id, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});




module.exports=router;