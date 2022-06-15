const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();


//Imports
const service  = mongoose.model("Service");//service 
const ResponseService = require('../utils/ResponsesService'); // Response service

// Create
router.post("/", async (req, res) => {
    new service(req.body).save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

//get all
router.get('/', (req, res) => {
    service.find((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
        .populate('serviceProvider','serviceProviderID categoryID')
        .populate('serviceCategory', 'name')

});

// Update
router.put("/", async (req, res) => {
    service .findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
});

// Get by id
router.get('/:id', (req, res) => {
    service .findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    service .findByIdAndRemove(req.params.id, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});

module.exports = router;
// router.post("/create", async (req, res, next) => {
// try {
//   const { error } = req.body;
//   if (error) return res.status(400).send(error.details[0].message);

//   console.log("id:", req.body.serviceCategoryId);

//   const user = await User.findById(req.body.user);
//   const serviceCategory = await ServiceCategory.findById(
//     req.body.serviceCategory
//   );
//   if (!serviceCategory)
//     return res.status(400).send("Invalid handyman service category.");

//   let service = new Service({
//     title: req.body.title,
//     serviceProvider: {
//       _id: user._id,
//     },
//     serviceCategory: {
//       _id: serviceCategory._id,
//     },
//     fee: req.body.fee,
//   });
//   service = await Service.save();

//   res.send(Service);
// } catch (ex) {
//   next(ex);
// }
//});

// router.put("/:id", async (req, res, next) => {
//   try {
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const serviceCategory = await ServiceCategory.findById(
//       req.body.serviceCategoryId
//     );
//     if (!serviceCategory)
//       return res.status(400).send("Invalid handyman service category.");

//     const handymanService = await HandymanService.findByIdAndUpdate(
//       req.params.id,
//       {
//         title: req.body.title,
//         serviceCategory: {
//           _id: serviceCategory._id,
//           name: serviceCategory.name,
//         },
//         price: req.body.price,
//       },
//       { new: true }
//     );

//     if (!handymanService)
//       return res
//         .status(404)
//         .send("The handyman service with the given ID was not found.");

//     res.send(handymanService);
//   } catch (ex) {
//     next(ex);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const handymanService = await HandymanService.findByIdAndRemove(
//       req.params.id
//     );

//     if (!handymanService)
//       return res
//         .status(404)
//         .send("The handyman service with the given ID was not found.");

//     res.send(handymanService);
//   } catch (ex) {
//     next(ex);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const handymanService = await HandymanService.findById(req.params.id);

//     if (!handymanService)
//       return res
//         .status(404)
//         .send("The handyman service with the given ID was not found.");

//     res.send(handymanService);
//   } catch (ex) {
//     next(ex);
//   }
// });

