const express = require('express');
const router = express.Router();
const { createQuiz, updateQuiz, deleteQuiz, getQuiz, getSingleQuiz } = require('../controllers/addQuiz');
const { createQuizSchema, updateQuizSchema } = require('../validators/quizRoute');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const validator = require('express-joi-validation').createValidator({ passError: true })

router.post('/', authMiddleware, roleMiddleware('quiz:create'), validator.body(createQuizSchema), createQuiz);
router.put('/:id', authMiddleware, roleMiddleware('quiz:update'), validator.body(updateQuizSchema), updateQuiz);
router.delete('/:id', authMiddleware, roleMiddleware('quiz:delete'), deleteQuiz);
router.get('/:id', authMiddleware, roleMiddleware('quiz:read'), getQuiz);
router.get('/single/:id', authMiddleware, roleMiddleware('quiz:read'), getSingleQuiz);

module.exports = router;