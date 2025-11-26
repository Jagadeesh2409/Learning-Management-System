const db = require("../db/knex");
const { error, response, success } = require("../utils/response");

const updateSocialMedia = async (req, res) => {
    try {
        const data = req.body;
        const user_id = req.user.id;
        const exists = await db('social_media_link').where({ user_id }).first();
        if (exists) {
            await db('social_media_link').where({ user_id }).update(data);
        } else {
            await db('social_media_link').insert({ user_id, ...data });
        }
        const profile = await db('users').select('*').where({ id: user_id });
        success(res, profile, response.SOCIAL_MEDIA_SAVED);
    } catch (err) {
        console.log(err);
        error(res, response.ISE);
    }
}

const getSocialMedia = async (req, res) => {
    try {
        const profile = await db('users').select('*').where({ id: req.user.id });
        success(res, profile, response.SOCIAL_MEDIA_FETCHED);
    } catch (err) {
        console.log(err);
        error(res, response.ISE);
    }
}

module.exports = {
    updateSocialMedia,
    getSocialMedia
}   