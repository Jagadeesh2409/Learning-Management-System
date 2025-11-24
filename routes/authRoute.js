const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/authController')
const { registerValidation, loginValidation } = require('../validators/authValidation')
const validator = require('express-joi-validation').createValidator({ passError: true })


router.post('/register', validator.body(registerValidation), register)
router.post('/login', validator.body(loginValidation), login)

module.exports = router
