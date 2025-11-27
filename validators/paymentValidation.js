const joi = require("joi");

const paymentValidation = joi.object({
    course_id: joi.number().required(),
    payment_id: joi.string().required(),
    payment_status: joi.string().required(),
    payment_method: joi.string().required(),
    payment_currency: joi.string().required(),
    payment_amount: joi.number().required(),
    payment_fee: joi.string().required(),
});

module.exports = { paymentValidation };


