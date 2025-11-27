const db = require('../db/knex');
const { error, success, response } = require('../utils/response');

const createReview = async (req, res) => {
    try {
        const student_id = req.user.id;
        const data = req.body;
        const review = await db('review').insert({ ...data, student_id });
        success(res, review, response.REVIEW_SAVED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const updateReview = async (req, res) => {
    try {
        const review = await db('review').where('id', req.params.id).update(req.body);
        success(res, review, response.REVIEW_UPDATED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const deleteReview = async (req, res) => {
    try {
        const review = await db('review').where('id', req.params.id).del();
        success(res, review, response.REVIEW_DELETED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getReview = async (req, res) => {
    try {
        const review = await db('review').where('course_id', req.params.course_id).select('*');
        success(res, review, response.REVIEW_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getSingleReview = async (req, res) => {
    try {
        const review = await db('review').where('id', req.params.id).select('*');
        success(res, review, response.REVIEW_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};



module.exports = {
    createReview,
    updateReview,
    deleteReview,
    getReview,
    getSingleReview
}