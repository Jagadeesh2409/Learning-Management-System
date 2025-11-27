const Joi = require('joi');

const createQuizSchema = Joi.object({
    lesson_id: Joi.number().required(),
    question: Joi.string().required(),
    option1: Joi.string().required(),
    option2: Joi.string().required(),
    option3: Joi.string().required(),
    option4: Joi.string().required(),
    answer: Joi.string().required(),
    mark: Joi.number().required(),
});

const updateQuizSchema = Joi.object({
    lesson_id: Joi.number(),
    question: Joi.string(),
    option1: Joi.string(),
    option2: Joi.string(),
    option3: Joi.string(),
    option4: Joi.string(),
    answer: Joi.string(),
    mark: Joi.number(),
});

module.exports = {
    createQuizSchema,
    updateQuizSchema
}

