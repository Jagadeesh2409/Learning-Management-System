const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/authMiddleware')

const { updateSocialMedia, getSocialMedia } = require('../controllers/socialmediaController')
const { updateSocialMediaValidation } = require('../validators/socialmediaValidator')
const validator = require('express-joi-validation').createValidator({ passError: true })

router.put('/socialmedia', authMiddleware, validator.body(updateSocialMediaValidation), updateSocialMedia)
router.get('/socialmedia', authMiddleware, getSocialMedia)

module.exports = router