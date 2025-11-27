const express = require('express');
const router = express.Router();
const { createReview, updateReview, deleteReview, getReview, getSingleReview } = require('../controllers/reviewController');

router.post('/create', createReview);
router.put('/update/:id', updateReview);
router.delete('/delete/:id', deleteReview);
router.get('/get/:course_id', getReview);
router.get('/getSingle/:id', getSingleReview);

module.exports = router;