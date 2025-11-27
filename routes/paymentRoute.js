const express = require("express");
const router = express.Router();
const { createPayment, myPayment } = require("../controllers/paymentController");
const { paymentValidation } = require('../validators/paymentValidation')
const validation = require('express-joi-validation').createValidator({ passError: true })
const { authMiddleware } = require('../middleware/authMiddleware')

router.post("/create", authMiddleware, validation.body(paymentValidation), createPayment);
router.get("/my", authMiddleware, myPayment);

module.exports = router;