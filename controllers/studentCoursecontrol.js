const db = require('../db/knex');
const { error, response, success } = require('../utils/response');

const getStudentCourse = async (req, res) => {
    try {
        const course = await db('enrollments').where({ id: req.params.id }).first();
        success(res, course, response.COURSE_FETCHED);
    } catch (err) {
        error(res, response.ISE);
    }
};