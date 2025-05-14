const express = require("express");
const router = express.Router();
const { createInvoice } = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createInvoice);

module.exports = router;
