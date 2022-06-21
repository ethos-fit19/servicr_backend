const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

//Imports
const Earnings = mongoose.model("Earnings");//Folder Model
const ResponseService = require('../utils/ResponsesService'); // Response service

// Create
router.post("/", async (req, res) => {
    new Earnings(req.body).save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

//get by servicer
router.get('/servicer/:id', (req, res) => {
    Earnings.find({serviceProviderId : req.params.id},(err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
        .populate('customerId', 'name')
        .populate('amount', 'price serviceAcceptedStatus clientAcceptedStatus')
});



// // Get by id
// router.get('/:id', (req, res) => {
//     Earnings.findById(req.params.id, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res);
//     });
// });





module.exports=router;