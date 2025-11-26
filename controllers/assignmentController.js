const db = require('../db/knex');
const { error, success, response } = require('../utils/response');

const createAssignment = async (req, res) => {
    try {
        const data = req.body;
        const assignment = await db('assignment').insert(data);
        success(res, assignment, response.ASSIGNMENT_SAVED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const updateAssignment = async (req, res) => {
    try {
        const assignment = await db('assignment').where('id', req.params.id).update(req.body);
        success(res, assignment, response.ASSIGNMENT_UPDATED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const deleteAssignment = async (req, res) => {
    try {
        const assignment = await db('assignment').where('id', req.params.id).del();
        success(res, assignment, response.ASSIGNMENT_DELETED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getAssignment = async (req, res) => {
    try {
        const assignment = await db('assignment').where('lesson_id', req.params.lesson_id).select('*');
        success(res, assignment, response.ASSIGNMENT_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

const getSingleAssignment = async (req, res) => {
    try {
        const assignment = await db('assignment').where('id', req.params.id).select('*');
        success(res, assignment, response.ASSIGNMENT_FETCHED)
    } catch (err) {
        console.error(err);
        error(res, response.ISE, 500)
    }
};

module.exports = {
    createAssignment,
    updateAssignment,
    deleteAssignment,
    getAssignment,
    getSingleAssignment
}

