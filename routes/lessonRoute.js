const express = require('express');
const router = express.Router();
const { createLesson, updateLesson, deleteLesson, getLesson, getSingleLesson } = require('../controllers/lessonController');
const { createLessonSchema, updateLessonSchema } = require('../validators/lessonValidation');
const validate = require('express-joi-validation').createValidator({ passError: true });
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

router.post('/new', authMiddleware, roleMiddleware('lesson:create'), validate.body(createLessonSchema), createLesson);
router.put('/:id', authMiddleware, roleMiddleware('lesson:update'), validate.body(updateLessonSchema), updateLesson);
router.delete('/:id', authMiddleware, roleMiddleware('lesson:delete'), deleteLesson);
router.get('/:id', authMiddleware, roleMiddleware('lesson:read'), getLesson);
router.get('/single/:id', authMiddleware, roleMiddleware('lesson:read'), getSingleLesson);

module.exports = router;