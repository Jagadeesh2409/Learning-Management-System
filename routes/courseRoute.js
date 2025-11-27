const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({ passError: true })
const { createCourse, updateCourse, deleteCourse, getCourse, getAllCoursesByInstructor, getAllCourses } = require('../controllers/courseController');
const { createCourseSchema, updateCourseSchema } = require('../validators/courseValidation');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

router.post('/new', authMiddleware, roleMiddleware('course:create'), validator.body(createCourseSchema), createCourse);
router.get('/all', getAllCourses);
router.get('/my-courses', authMiddleware, roleMiddleware('course:read'), getAllCoursesByInstructor);
router.put('/:id', authMiddleware, roleMiddleware('course:update'), validator.body(updateCourseSchema), updateCourse);
router.delete('/:id', authMiddleware, roleMiddleware('course:delete'), deleteCourse);
router.get('/:id', getCourse);



module.exports = router;
