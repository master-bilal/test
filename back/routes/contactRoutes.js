// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Create a new contact
router.post("/contacts", contactController.createContact);

// Get all contacts (admin route)
router.get("/contacts", contactController.getAllContacts);

// Get a specific contact
router.get("/contacts/:id", contactController.getContact);

// Delete a contact
router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
