const Joi = require("joi");


const updateSocialMediaValidation = Joi.object({
    instagram: Joi.string().uri().optional(),
    facebook: Joi.string().uri().optional(),
    linkedin: Joi.string().uri().optional(),
    github: Joi.string().uri().optional(),
})

module.exports = {
    updateSocialMediaValidation
}
