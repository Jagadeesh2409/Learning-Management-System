const db = require('../db/knex');
const { error, response, success } = require('../utils/response');

const createCourse = async (req, res) => {
    try {
        const data = req.body;
        const instructor_id = req.user.id;
        data.instructor_id = instructor_id;
        const course = await db('course').insert(data);
        success(res, course, response.COURSE_SAVED);
    } catch (err) {
        console.log(err);
        error(res, response.ISE);
    }
};

const updateCourse = async (req, res) => {
    try {
        const data = req.body;

        const course = await db('course').where({ id: req.params.id, instructor_id: req.user.id }).update(data);
        success(res, course, response.COURSE_UPDATED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await db('course').where({ id: req.params.id, instructor_id: req.user.id }).del();
        success(res, course, response.COURSE_DELETED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const getCourse = async (req, res) => {
    try {
        const course = await db('course').where({ id: req.params.id, instructor_id: req.user.id }).first();
        success(res, course, response.COURSE_FETCHED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await db('course').where({ instructor_id: req.user.id });
        success(res, courses, response.COURSE_FETCHED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const getAllCoursesByInstructor = async (req, res) => {
    try {
        const instructor_id = req.user.id;
        const courses = await db('course').where({ instructor_id: instructor_id });
        success(res, courses, response.COURSE_FETCHED);
    } catch (err) {
        error(res, response.ISE);
    }
};

module.exports = {
    createCourse,
    updateCourse,
    deleteCourse,
    getCourse,
    getAllCourses,
    getAllCoursesByInstructor
};