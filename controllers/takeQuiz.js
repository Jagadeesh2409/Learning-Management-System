const db = require('../db/knex');
const { error, response, success } = require('../utils/response');

const takeQuiz = async (req, res) => {
    try {
        const data = req.body;
        const student_id = req.user && req.user.id;
        if (!student_id) return error(res, response.UNAUTHORIZED, 401);

        const quiz = await db('quiz').where('id', data.quiz_id).first();
        if (!quiz) {
            return error(res, response.QUIZ_NOT_FOUND, 404)
        }

        // store numeric mark earned for this quiz (0 if incorrect)
        const earned = quiz.answer === data.answer ? Number(quiz.mark || 0) : 0;

        const insertPayload = {
            student_id,
            quiz_id: data.quiz_id,
            answer: data.answer,
            mark: earned
        };

        const [id] = await db('studentquiztest').insert(insertPayload);
        success(res, { id, ...insertPayload }, response.QUIZ_SAVED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}


const getQuiz = async (req, res) => {
    try {
        const quiz = await db('quiz').where('id', req.params.id).first();
        if (!quiz) return error(res, response.QUIZ_NOT_FOUND, 404);
        const { answer, ...rest } = quiz;
        success(res, rest, response.QUIZ_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
}

const getMark = async (req, res) => {
    try {
        const student_id = req.user.id;
        const lesson_id = req.params.lesson_id;
        const totalRow = await db('quiz').where({ lesson_id }).count('* as count');
        const total = Number(totalRow[0].count || 0);

        const markRow = await db('studentquiztest')
            .join('quiz', 'studentquiztest.quiz_id', 'quiz.id')
            .where('quiz.lesson_id', lesson_id)
            .andWhere('studentquiztest.student_id', student_id)
            .sum('studentquiztest.mark as mark');

        const mark = Number(markRow[0].mark || 0);

        const data = { total, mark };
        success(res, data, response.QUIZ_FETCHED)
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