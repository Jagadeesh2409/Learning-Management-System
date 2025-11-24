const express = require('express')
const router = express.Router()
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware')


const { updateInstructorProfile, getInstructorProfile } = require('../controllers/profileController')
const { updateInstructorProfileValidation } = require('../validators/profileValidation')
const validator = require('express-joi-validation').createValidator({ passError: true })

router.put('/profile', authMiddleware, roleMiddleware('instructor_profile:update'), validator.body(updateInstructorProfileValidation), updateInstructorProfile)
router.get('/profile', authMiddleware, roleMiddleware('instructor_profile:read'), getInstructorProfile)


module.exports = router