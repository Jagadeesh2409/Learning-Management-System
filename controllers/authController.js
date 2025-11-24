const db = require('../db/knex')
const { error, response, success } = require('../utils/response')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const data = req.body
    try {
        const exist = await db('users').where('email', data.email).first()
        if (exist) {
            return error(res, response.EMAIL_EXISTS)
        }
        const hash = await bcrypt.hash(data.password, 10)
        data.password = hash
        const [id] = await db('users').insert(data)
        const user = await db('users').where('id', id).first()
        const token = jwt.sign({ id: user.id, role_id: user.role_id, }, process.env.JWT_SECRET)
        success(res, { token }, response.REGISTER_SUCCESS)
    } catch (err) {
        console.log(err)
        error(res, response.ISE)
    }
}

const login = async (req, res) => {
    const data = req.body
    try {
        const user = await db('users').where('email', data.email).first()
        if (!user) {
            return error(res, response.USER_NOT_FOUND)
        }
        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) {
            return error(res, response.INVALID_CREDENTIALS)
        }
        const token = jwt.sign({ id: user.id, role_id: user.role_id }, process.env.JWT_SECRET)
        success(res, { token }, response.LOGIN_SUCCESS)
    } catch (err) {
        console.log(err)
        error(res, response.ISE)
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token')
        success(res, response.LOGOUT_SUCCESS)
    } catch (err) {
        console.log(err)
        error(res, response.ISE)
    }
}

module.exports = {
    register,
    login,
    logout
}
