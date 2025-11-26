const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/create', controller.createLiveClass);
router.get('/token', controller.generateToken)
router.post('/token', controller.generateToken)
router.post('/webhook', express.raw({ type: 'application/webhook+json' }), controller.handleWebhook)
router.get('/course/:courseId', controller.getClassesByCourse);
router.get('/teacher/:teacherId', controller.getClassesByTeacher);

module.exports = router;
