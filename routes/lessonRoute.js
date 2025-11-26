const express = require('express');
const router = express.Router();
const { createLesson, updateLesson, deleteLesson, getLesson, getSingleLesson } = require('../controllers/lessonController');
const { createLessonSchema, updateLessonSchema } = require('../validators/lessonValidation');
const validate = require('../middleware/validate');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, roleMiddleware('lesson:create'), validate(createLessonSchema), createLesson);
router.put('/:id', authMiddleware, roleMiddleware('lesson:update'), validate(updateLessonSchema), updateLesson);
router.delete('/:id', authMiddleware, roleMiddleware('lesson:delete'), deleteLesson);
router.get('/:id', authMiddleware, roleMiddleware('lesson:read'), getLesson);
router.get('/single/:id', authMiddleware, roleMiddleware('lesson:read'), getSingleLesson);

module.exports = router;