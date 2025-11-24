const express = require('express')
const router = express.Router()
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware')

const { updateAdminProfile, getAdminProfile } = require('../controllers/profileController')
const { updateAdminProfileValidation } = require('../validators/profileValidation')
const validator = require('express-joi-validation').createValidator({ passError: true })

router.put('/profile', authMiddleware, roleMiddleware('admin_profile:update'), validator.body(updateAdminProfileValidation), updateAdminProfile)
router.get('/profile', authMiddleware, roleMiddleware('admin_profile:read'), getAdminProfile)

module.exports = router