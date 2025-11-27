const db = require('../db/knex');
const { error, response, success } = require('../utils/response');

const createCourse = async (req, res) => {
    try {
        if (!req.body) {
            return error(res, response.ROLE_NOT_FOUND)
        }
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
        if (!req.params.id) {
            return error(res, response.ROLE_NOT_FOUND)
        }
        const data = req.body;
        const instructor_id = req.user.id;
        const course = await db('course').where({ id: req.params.id, instructor_id: instructor_id }).update(data);
        success(res, course, response.COURSE_UPDATED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const deleteCourse = async (req, res) => {
    try {
        if (!req.params.id) {
            return error(res, response.ROLE_NOT_FOUND)
        }
        const course = await db('course').where({ id: req.params.id }).del();
        success(res, course, response.COURSE_DELETED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const getCourse = async (req, res) => {
    try {
        if (!req.params.id) {
            return error(res, response.ROLE_NOT_FOUND)
        }
        const course = await db('course').where({ id: req.params.id }).first();
        if (!course) {
            return error(res, response.COURSE_NOT_FOUND)
        }
        success(res, course, response.COURSE_FETCHED);
    } catch (err) {
        error(res, response.ISE);
    }
};



const getAllCoursesByInstructor = async (req, res) => {
    try {
        const instructor_id = req.user.id;
        const courses = await db('course').where({ instructor_id: instructor_id }).select('*');
        success(res, courses, response.COURSE_FETCHED);
    } catch (err) {
        error(res, response.ISE);
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await db('course').select('*');
        console.log(courses);
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
    getAllCoursesByInstructor,
    getAllCourses,
};