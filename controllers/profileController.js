const db = require("../db/knex");
const { error, response, success } = require("../utils/response");

const updateStudentProfile = async (req, res) => {
    try {
        const data = req.body;
        const exists = await db("students")
            .where({ student_id: req.user.id })
            .first();

        if (exists) {
            await db("students")
                .where({ student_id: req.user.id })
                .update(data);
        } else {
            await db("students").insert({
                student_id: req.user.id,
                ...data
            });
        }
        success(res, null, response.STUDENT_PROFILE_SAVED);
    } catch (_) {
        error(res, response.ISE);
    }
}

const updateInstructorProfile = async (req, res) => {
    try {
        const data = req.body;
        data.education = JSON.stringify(data.education);
        data.experience = JSON.stringify(data.experience);
        data.skills = JSON.stringify(data.skills);

        const exists = await db("instructors")
            .where({ instructor_id: req.user.id })
            .first();

        if (exists) {
            await db("instructors")
                .where({ instructor_id: req.user.id })
                .update(data);
        } else {
            await db("instructors").insert({
                instructor_id: req.user.id,
                ...data,
            });
        }

        success(res, null, response.INSTRUCTOR_PROFILE_SAVED);
    } catch (err) {
        console.log(err)
        error(res, response.ISE);
    }
}

const updateAdminProfile = async (req, res) => {
    try {
        const data = req.body;
        const exists = await db("admins")
            .where({ admin_id: req.user.id })
            .first();

        if (exists) {
            await db("admins")
                .where({ admin_id: req.user.id })
                .update(data);
        } else {
            await db("admins").insert({
                admin_id: req.user.id,
                ...data,
            });
        }

        success(res, null, response.ADMIN_PROFILE_SAVED);
    } catch (err) {
        console.log(err)
        error(res, response.ISE);
    }
}


const getStudentProfile = async (req, res) => {
    try {
        const user_id = req.user.id;
        let profile;
        const student = await db('students').where({ student_id: user_id }).first();
        if (!student) {
            profile = await db('users').select('id', 'name', 'email', 'phone').where({ id: user_id }).first();
            return success(res, profile, response.STUDENT_PROFILE_FETCHED);
        }
        profile = await db('users')
            .join('students', 'users.id', 'students.student_id')
            .select(
                'users.id',
                'users.name',
                'users.email',
                'students.age',
                'students.DOB',
                'students.education',
                'students.profile_image'
            )
            .where('users.id', user_id)
            .first();
        success(res, profile, response.STUDENT_PROFILE_FETCHED);
    } catch (_) {
        error(res, response.ISE);
    }
}

const getInstructorProfile = async (req, res) => {
    try {
        const user_id = req.user.id;
        let profile;
        const instructor = await db('instructors').where({ instructor_id: user_id }).first();
        if (!instructor) {
            profile = await db('users').select('id', 'name', 'email', 'phone').where({ id: user_id }).first();
            return success(res, profile, response.INSTRUCTOR_PROFILE_FETCHED);
        }
        profile = await db("users")
            .join("instructors", "users.id", "instructors.instructor_id")
            .select(
                "users.id",
                "users.name",
                "users.email",
                "instructors.age",
                "instructors.DOB",
                "instructors.education",
                "instructors.profile_image",
                "instructors.resume",
                "instructors.job_type",
                "instructors.skills",
                "instructors.experience",
            )
            .where("users.id", user_id)
            .first();
        success(res, profile, response.INSTRUCTOR_PROFILE_FETCHED);
    } catch (err) {
        console.log(err)
        error(res, response.ISE);
    }
}

const getAdminProfile = async (req, res) => {
    try {
        const user_id = req.user.id;
        console.log(user_id)
        let profile;
        const admin = await db('admins').where({ admin_id: user_id }).first();
        if (!admin) {
            profile = await db('users').select('id', 'name', 'email', 'phone').where({ id: user_id }).first();
            return success(res, profile, response.ADMIN_PROFILE_FETCHED);
        }

        profile = await db("users")
            .join("admins", "users.id", "admins.admin_id")
            .select(
                "users.id",
                "users.name",
                "users.email",
                "admins.profile_image"
            )
            .where("users.id", user_id)
            .first();

        console.log(profile)
        success(res, profile, response.ADMIN_PROFILE_FETCHED);
    } catch (err) {
        console.log(err)
        error(res, response.ISE);
    }
}

module.exports = {
    updateStudentProfile,
    updateInstructorProfile,
    updateAdminProfile,
    getStudentProfile,
    getInstructorProfile,
    getAdminProfile
}


