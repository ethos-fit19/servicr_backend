const express = require("express");
const router = express.Router();

//Imports
ReviewController = require('../controllers/reviewsController');

// CreateService
router.post("/", async (req, res) => ReviewController.create(req,res));

//get all
router.get("/", (req, res) => ReviewController.getAll(req,res));

// Update
router.put("/", async (req, res) => ReviewController.update(req,res));

// Get by id
router.get("/:id", (req, res) => ReviewController.getById(req,res));

// Delete
router.delete("/:id", (req, res) => ReviewController.delete(req,res));

// Get by user id
router.get("/user/:id", (req, res) => ReviewController.getByUserId(req,res));

module.exports = router;
