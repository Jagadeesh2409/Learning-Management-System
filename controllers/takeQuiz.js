const db = require('../db/knex');
const { error, response, success } = require('../utils/response');

const takeQuiz = async (req, res) => {
    try {
        const data = req.body;
        const quiz = await db('quiz').where('id', data.quiz_id).first();
        if (!quiz) {
            return error(res, response.ROLE_NOT_FOUND)
        }
        if (quiz.answer === data.answer) {
            data.mark = true;
        }
        await db('studentquiztest').insert(data);
        success(res, data, response.ROLE_SAVED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}


const getQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('id', req.params.id).first();
        delete quiz.answer;
        success(res, quiz, response.ROLE_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}

const getMark = async (req, res) => {
    try {
        const student_id = req.user.id;
        const lesson_id = req.params.lesson_id;
        const total = await db('quiz').where({ lesson_id }).count('*');
        const mark = await db('studentquiztest').where({ student_id, answer: true }).count('*');
        const data = {
            total: total[0].count,
            mark: mark[0].count
        }
        success(res, data, response.ROLE_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}

module.exports = {
    takeQuiz,
    getQuiz,
    getMark
}