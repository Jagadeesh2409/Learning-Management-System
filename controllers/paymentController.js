const db = require('../db/knex');
const { error, response, success } = require('../utils/response')

const createPayment = async (req, res) => {
    try {
        const student_id = req.user.id;
        const data = req.body;
        data.student_id = student_id;
        const course = await db('course').where('id', data.course_id).first();
        if (!course) {
            return error(res, response.COURSE_NOT_FOUND, 404);
        }

        if (data.payment_status !== 'success' || Number(data.payment_amount) !== Number(course.price)) {
            return error(res, response.PAYMENT_FAILED)
        }

        const [paymentId] = await db('payments').insert(data);

        const valid_month = course.valid_month || 3;

        await db('enrollments').insert({
            student_id: student_id,
            course_id: data.course_id,
            status: 'active',
            enrolled_at: new Date(),
            expired_at: new Date(new Date().setMonth(new Date().getMonth() + valid_month))
        });

        success(res, { id: paymentId }, response.PAYMENT_SAVED)
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return error(res, response.COURSE_ALREADY_ENROLLED)
        }

        console.error(err)
        error(res, response.ISE)
    }
}

const myPayment = async (req, res) => {
    try {
        const student_id = req.user.id;
        const payment = await db('payments').where('student_id', student_id);
        success(res, payment, response.PAYMENT_FETCHED)
    } catch (err) {
        error(res, err)
    }
}

module.exports = {
    createPayment,
    myPayment
}