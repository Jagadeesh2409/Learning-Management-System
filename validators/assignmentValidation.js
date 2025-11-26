const joi = require("joi");

const createAssignmentValidation = joi.object({
    lesson_id: joi.number().required(),
    url: joi.string().required(),
    size: joi.number().required(),
    type: joi.number().required(),
});

const updateAssignmentValidation = joi.object({
    lesson_id: joi.number().required(),
    url: joi.string().required(),
    size: joi.number().required(),
    type: joi.number().required(),
});

module.exports = {
    createAssignmentValidation,
    updateAssignmentValidation
}
