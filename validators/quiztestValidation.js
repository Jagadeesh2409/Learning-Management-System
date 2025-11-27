const Joi = require('joi');

const quiztestSchema = Joi.object({
    student_id: Joi.number().required(),
    quiz_id: Joi.number().required(),
    answer: Joi.string().required(),
});

module.exports = {
    quiztestSchema
}
