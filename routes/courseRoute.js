const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({ passError: true })
const { createCourse, updateCourse, deleteCourse, getCourse, getAllCoursesByInstructor } = require('../controllers/courseController');
const { createCourseSchema, updateCourseSchema } = require('../validators/courseValidation');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, roleMiddleware('course:create'), validator.body(createCourseSchema), createCourse);
router.put('/:id', authMiddleware, roleMiddleware('course:update'), validator.body(updateCourseSchema), updateCourse);
router.delete('/:id', authMiddleware, roleMiddleware('course:delete'), deleteCourse);
router.get('/:id', authMiddleware, roleMiddleware('course:read'), getCourse);
router.get('/', authMiddleware, roleMiddleware('course:read'), getAllCoursesByInstructor);

module.exports = router;
