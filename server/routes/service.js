const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Service = mongoose.model("Service");

router.get("/", async (req, res, next) => {
  try {
    const services = await Service.find().sort("name");
    res.send(services);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  const { title, serviceProvider, serviceCategory, fee } = req.body;

  if (!title || !serviceProvider || !serviceCategory || !fee) {
    return res.status(422).json({ error: "Add all the fields" });
  }
  const service = new Service({
    title,
    serviceProvider,
    serviceCategory,
    fee,
  });

  service
    .save()
    .then((result) => {
      res.json({ service: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

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

module.exports = router;
