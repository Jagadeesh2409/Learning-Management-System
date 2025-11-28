const db = require('../db/knex');
const { error, success, response } = require('../utils/response');

const getQuiz = async (req, res) => {
    try {
        const lessonId = req.params.lesson_id || req.params.id;
        const quizzes = await db('quiz').where('lesson_id', lessonId).select('*');
        const sanitized = quizzes.map(q => {
            const { answer, ...rest } = q;
            return rest;
        });
        success(res, sanitized, response.QUIZ_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}

module.exports = {
    getQuiz
}