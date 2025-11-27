const joi = require("joi");

const createLessonSchema = joi.object({
    course_id: joi.number().required(),
    instructor_id: joi.number().required(),
    video: joi.string().required(),
    thumbnail: joi.string().required(),
    duration: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required(),
    type: joi.string().required(),
    status: joi.string().required(),
    difficulty: joi.string().required(),
    order: joi.number().required(),

});

const updateLessonSchema = joi.object({
    course_id: joi.number(),
    instructor_id: joi.number(),
    video: joi.string(),
    thumbnail: joi.string(),
    duration: joi.string(),
    title: joi.string(),
    description: joi.string(),
    type: joi.string(),
    status: joi.string(),
    difficulty: joi.string(),
    order: joi.number(),
});

module.exports = {
    createLessonSchema,
    updateLessonSchema
}
