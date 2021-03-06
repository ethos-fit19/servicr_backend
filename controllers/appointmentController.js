const mongoose = require("mongoose");
const appointment = mongoose.model("Appointment"); //appointment
const ResponseService = require("../utils/ResponsesService"); // Response service

// Create
exports.create=(async(req, res) => {
  new appointment(req.body).save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

//get all
exports.getAll=(async(req, res) => {
  appointment.find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 })
    .populate("service", "title")
    .populate("client", "name email nic mobileNo")
    .populate("serviceProvider", "serviceProviderID")
    .populate("serviceCategory.serviceProviderID", "name email nic mobileNo")
    .populate("serviceCategory", "name");
});

// Update
exports.update=(async(req, res) => {
  appointment.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Get by id
exports.getById=(async(req, res) => {
  appointment.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Delete
exports.delete=(async(req, res) => {
  appointment.findByIdAndRemove(req.params.id, (err, doc) => {
    ResponseService.generalResponse(err, res, "appointment removed successfully");
  });
});

//get by servicer
exports.getByServicer=(async(req, res) => {
  appointment.find({ serviceProvider: req.params.id }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 });
});

//get notification
exports.getNotification=(async(req, res) => {
  appointment.find({ serviceProvider: req.params.id, serviceisAcceptedStatus: "false" },(err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    });
});

