const db = require('../db/knex')
const { error, success, response } = require('../utils/response')

const createLesson = async (req, res) => {
    try {
        const data = req.body;
        const lesson = await db('lesson').insert(data);
        success(res, lesson, response.LESSON_SAVED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getLesson = async (req, res) => {
    try {
        const lesson = await db('lesson').where('course_id', req.params.course_id).select('*');
        success(res, lesson, response.LESSON_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const updateLesson = async (req, res) => {
    try {
        const lesson = await db('lesson').where('id', req.params.id).update(req.body);
        success(res, lesson, response.LESSON_UPDATED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};


const deleteLesson = async (req, res) => {
    try {
        const lesson = await db('lesson').where('id', req.params.id).del();
        success(res, lesson, response.LESSON_DELETED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getSingleLesson = async (req, res) => {
    try {
        const lesson = await db('lesson').where('id', req.params.id).select('*');
        success(res, lesson, response.LESSON_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

module.exports = {
    createLesson,
    getLesson,
    updateLesson,
    deleteLesson,
    getSingleLesson
}




