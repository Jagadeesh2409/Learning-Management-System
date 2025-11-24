const Joi = require("joi");


const updateStudentProfileValidation = Joi.object({
    name: Joi.string().required(),
    age: Joi.string().required(),
    DOB: Joi.string().required(),
    gender: Joi.string().required(),
    education: Joi.array().required(),
    profile_image: Joi.string().optional(),
});


const updateInstructorProfileValidation = Joi.object({
    education: Joi.array().required(),
    experience: Joi.array().required(),
    skills: Joi.array().required(),
    profile_image: Joi.string().optional(),
    resume: Joi.string().required(),
    job_type: Joi.number().required(),
    age: Joi.string().required(),
    DOB: Joi.string().required(),
    gender: Joi.string().required(),
});

const updateAdminProfileValidation = Joi.object({
    profile_image: Joi.string().optional(),
});

module.exports = {
    updateStudentProfileValidation,
    updateInstructorProfileValidation,
    updateAdminProfileValidation
}
