const Joi = require('joi');

const createCourseSchema = Joi.object({
    title: Joi.string().required(),
    instructor_name: Joi.string().required(),
    description: Joi.string().required(),
    course_type: Joi.string().valid('online', 'offline', 'recorded', 'hybrid').required(),
    duration_in_minutes: Joi.number().required(),
    price_type: Joi.string().valid('free', 'one-time', 'subscription').required(),
    price: Joi.number().required(),
    original_price: Joi.number().required(),
    image: Joi.string().required(),
    discount: Joi.number(),
    language: Joi.string().required(),
    course_status: Joi.string().valid('draft', 'published', 'archived', 'unlisted').required(),
});

const updateCourseSchema = Joi.object({
    title: Joi.string(),
    instructor_name: Joi.string(),
    description: Joi.string(),
    course_type: Joi.string().valid('online', 'offline', 'recorded', 'hybrid'),
    duration_in_minutes: Joi.number(),
    price_type: Joi.string().valid('free', 'one-time', 'subscription'),
    price: Joi.number(),
    original_price: Joi.number(),
    discount: Joi.number(),
    start_date: Joi.date(),
    language: Joi.string(),
    ending_date: Joi.date(),
    image: Joi.string(),
    valid_month: Joi.number(),
    course_status: Joi.string().valid('draft', 'published', 'archived', 'unlisted'),
});


module.exports = {
    createCourseSchema,
    updateCourseSchema
};
