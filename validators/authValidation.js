const Joi = require("joi");

const registerValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    role_id: Joi.number().required(),
});

const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

module.exports = {
    registerValidation,
    loginValidation
}
