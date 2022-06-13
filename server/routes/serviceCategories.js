const express = require('express');
const router = express.Router();

//Imports
const serviceCategories = require('../models/serviceCategory');//serviceCategories
const ResponseService = require('../utils/ResponsesService'); // Response service

// Create
router.post("/", async (req, res) => {
    new serviceCategories(req.body).save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

//get all
router.get('/', (req, res) => {
    serviceCategories.find((err, doc) => {
        ResponseService.generalPayloadResponse(err, newPayload, res);
    })
        .sort({ addedOn: -1 })
});

// Update
router.put("/:id", async (req, res) => {
    
    serviceCategories.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
});

// Get by id
router.get('/:id', (req, res) => {
    serviceCategories.findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    serviceCategories.findByIdAndRemove(req.body.id, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});



module.exports=router;