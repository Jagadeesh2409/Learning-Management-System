const db = require('../db/knex');
const { error, response, success } = require('../utils/response')

const checkEntroll = async (req, res, next) => {
    try {
        const student_id = req.user.id;
        const course_id = req.params.id;

        const date = new Date();
        const entroll = await db('enrollments').where({ student_id, course_id }).andWhere('expired_at', '>', date).first();
        if (!entroll) {
            return error(res, response.COURSE_NOT_FOUND)
        }
        next()
    } catch (err) {
        console.log(err)
        error(res, response.ISE)
    }
}

module.exports = {
    checkEntroll
}
