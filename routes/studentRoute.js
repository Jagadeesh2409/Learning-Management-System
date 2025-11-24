const express = require('express')
const router = express.Router()
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware')

const { updateStudentProfile, getStudentProfile } = require('../controllers/profileController')
const { updateStudentProfileValidation } = require('../validators/profileValidation')
const validator = require('express-joi-validation').createValidator({ passError: true })

router.put('/profile', authMiddleware, roleMiddleware('student_profile:update'), validator.body(updateStudentProfileValidation), updateStudentProfile)
router.get('/profile', authMiddleware, roleMiddleware('student_profile:read'), getStudentProfile)

module.exports = router