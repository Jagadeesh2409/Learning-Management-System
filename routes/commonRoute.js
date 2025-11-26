const express = require('express')
const router = express.Router()

const {getAllCourses} = require('../controllers/courseController')

router.get('/course',getAllCourses)

module.exports = router