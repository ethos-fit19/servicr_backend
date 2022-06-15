const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

//Imports
const user =  mongoose.model("User");
const ResponseService = require('../utils/ResponsesService'); // Response service



//get all
router.get("/", (req, res) => {
    user.find((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
});

// Update
router.put("/", async (req, res) => {
    
    user.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
});

// Get by id
router.get('/:id', (req, res) => {
    user.findById(req.body.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    user.findByIdAndRemove(req.params.id, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});



module.exports=router;