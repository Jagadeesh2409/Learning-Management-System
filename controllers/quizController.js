const db = require('../db/knex');
const { error, success, response } = require('../utils/response');

const getQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('lesson_id', req.params.lesson_id).first();
        delete quiz.answer;
        success(res, quiz, response.QUIZ_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}

module.exports = {
    getQuiz
}