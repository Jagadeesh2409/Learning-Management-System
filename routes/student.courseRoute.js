const express = require('express');
const router = express.Router();
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const { checkEntroll } = require('../controllers/entrollController');
const { getLesson, getSingleLesson } = require('../controllers/lessonController');
const { getCourse } = require('../controllers/courseController')
const { getQuiz } = require('../controllers/quizController')
const { getMark, getQuiz, takeQuiz } = require('../controllers/takeQuiz')

router.get('/course/:id', authMiddleware, roleMiddleware('student-entroll'), checkEntroll, getCourse);
router.get('/lesson/:id', authMiddleware, roleMiddleware('student-entroll'), checkEntroll, getLesson);
router.get('/lesson/single/:id', authMiddleware, roleMiddleware('student-entroll'), checkEntroll, getSingleLesson)
router.get('/lesson/quiz/:id', authMiddleware, roleMiddleware('student-entroll'), checkEntroll, getQuiz)
router.get('/lesson/assignment/:id', authMiddleware, roleMiddleware('student-entroll'), checkEntroll)
router.post('/quiz', authMiddleware, roleMiddleware('student-entroll'), checkEntroll, takeQuiz);

module.exports = router;
