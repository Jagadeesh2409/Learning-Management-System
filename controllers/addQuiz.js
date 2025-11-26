const db = require('../db/knex');
const { error, success, response } = require('../utils/response');

const createQuiz = async (req, res) => {
    try {
        const data = req.body;
        const quiz = await db('quiz').insert(data);
        success(res, quiz, response.QUIZ_SAVED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const updateQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('id', req.params.id).update(req.body);
        success(res, quiz, response.QUIZ_UPDATED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const deleteQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('id', req.params.id).del();
        success(res, quiz, response.QUIZ_DELETED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('lesson_id', req.params.lesson_id).select('*');
        success(res, quiz, response.QUIZ_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getSingleQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('id', req.params.id).select('*');
        success(res, quiz, response.QUIZ_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};


module.exports = {
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuiz,
    getSingleQuiz
}


