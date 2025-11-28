const jwt = require("jsonwebtoken");
require('dotenv').config()
const { error, response } = require("../utils/response");
const db = require("../db/knex");

const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) return error(res, response.UNAUTHORIZED, 401)

    const token = header.split(" ")[1];
    if (!token) return error(res, response.UNAUTHORIZED, 401);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        error(res, response.UNAUTHORIZED, 401);
    }
};



const roleMiddleware = (permissionKey) => {
    return async (req, res, next) => {
        try {

            const perm = await db("permission")
                .where({ permissions: permissionKey })
                .select("id")
                .first();

            if (!perm || !perm.id) {
                return error(res, response.PERMISSION_DENIED, 401);
            }

            const rolePerm = await db("role_permission")
                .where({
                    role_id: req.user.role_id,
                    permission_id: perm.id,
                    value: true
                })
                .first();

            if (!rolePerm) {
                return error(res, response.PERMISSION_DENIED, 401);
            }
            next();
        } catch (_) {
            return error(res, response.PERMISSION_DENIED, 401);
        }
    };
};


module.exports = { authMiddleware, roleMiddleware }
