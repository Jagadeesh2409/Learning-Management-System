const express = require('express');
const router = express.Router();
const { createQuiz, updateQuiz, deleteQuiz, getQuiz, getSingleQuiz } = require('../controllers/addQuiz');
const { createQuizSchema, updateQuizSchema } = require('../validators/quizRoute');
const validate = require('../middleware/validate');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, roleMiddleware('quiz:create'), validate(createQuizSchema), createQuiz);
router.put('/:id', authMiddleware, roleMiddleware('quiz:update'), validate(updateQuizSchema), updateQuiz);
router.delete('/:id', authMiddleware, roleMiddleware('quiz:delete'), deleteQuiz);
router.get('/:id', authMiddleware, roleMiddleware('quiz:read'), getQuiz);
router.get('/single/:id', authMiddleware, roleMiddleware('quiz:read'), getSingleQuiz);

module.exports = router;