const db = require('../db/knex')
const { error, success, response } = require('../utils/response')
const _ = require('lodash')


const createLesson = async (req, res) => {
    try {
        const data = req.body;
        const instructor_id = req.user.id;
        const slug = _.kebabCase(`${data.course_id}-${data.title}`);
        data.instructor_id = instructor_id;
        data.slug = slug;
        const lesson = await db('lesson').insert(data);
        success(res, lesson, response.LESSON_SAVED)
    } catch (err) {
        console.log(err)
        if (err.code === 'ER_DUP_ENTRY') {
            error(res, response.LESSON_TITLE_EXISTS, 400)
        }
        error(res, response.ISE, 500)
    }
};

const getLesson = async (req, res) => {
    try {
        const course_id = req.params.id;
        console.log(course_id)
        const lesson = await db('lesson').where({ course_id }).select('*');
        success(res, lesson, response.LESSON_FETCHED)
    } catch (err) {
        console.error(err.message);
        error(res, response.ISE, 500)
    }
};

const updateLesson = async (req, res) => {
    try {
        const data = req.body;
        const lesson_id = req.params.id;
        if (req.body.title) {
            const slug = _.kebabCase(`${lesson_id}-${req.body.title}`);
            data.slug = slug;
        }
        const lesson = await db('lesson').where('id', lesson_id).update(data);
        success(res, lesson, response.LESSON_UPDATED)
    } catch (err) {
        console.log(err)
        if (err.code === 'ER_DUP_ENTRY') {
            error(res, response.LESSON_TITLE_EXISTS, 400)
        }
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
        const lesson = await db('lesson').where('id', req.params.id).first();
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




