const express = require('express');
const router = express.Router();
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const { createQuiz, updateQuiz, deleteQuiz, getQuiz, getSingleQuiz } = require('../controllers/addQuiz');

router.post('/new', authMiddleware, roleMiddleware('quiz:create'), createQuiz);
router.put('/:id', authMiddleware, roleMiddleware('quiz:update'), updateQuiz);
router.delete('/:id', authMiddleware, roleMiddleware('quiz:delete'), deleteQuiz);
router.get('/:id', authMiddleware, roleMiddleware('quiz:read'), getQuiz);
router.get('/single/:id', authMiddleware, roleMiddleware('quiz:read'), getSingleQuiz);

module.exports = router;