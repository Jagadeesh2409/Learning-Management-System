const success = (res, data, message, status = 200) => {
    return res.status(status).json({
        success: true,
        message: message,
        data: data
    })
}

const error = (res, message, status = 400, data = null) => {
    return res.status(status).json({
        success: false,
        message,
        data
    })
}

const response = {
    ISE: "Internal Server Error",
    EMAIL_EXISTS: "Email already exists",
    USER_NOT_FOUND: "User not found",
    INVALID_CREDENTIALS: "Invalid credentials",
    REGISTER_SUCCESS: "User registered successfully",
    LOGIN_SUCCESS: "User logged in successfully",
    LOGOUT_SUCCESS: "User logged out successfully",
    UNAUTHORIZED: "Token invalid",
    ROLE_NOT_FOUND: "Role not found",
    PERMISSION_NOT_FOUND: "Permission not found",
    ACCESS_DENIED: "You do not have permission to access this resource",
    REFRESH_TOKEN_INVALID: "Refresh token invalid or expired",

    STUDENT_PROFILE_SAVED: "Student profile saved",
    INSTRUCTOR_PROFILE_SAVED: "Instructor profile saved",
    ADMIN_PROFILE_SAVED: "Admin profile saved",

    PERMISSION_DENIED: "You do not have permission to access this resource",
    UPLOADED: "File uploaded successfully",

    SOCIAL_MEDIA_SAVED: "Social media saved",
    SOCIAL_MEDIA_UPDATED: "Social media updated",
    SOCIAL_MEDIA_FETCHED: "Social media fetched",

    COURSE_SAVED: "Course saved",
    COURSE_UPDATED: "Course updated",
    COURSE_FETCHED: "Course fetched",
    COURSE_DELETED: "Course deleted",

    LESSON_SAVED: "Lesson saved",
    LESSON_UPDATED: "Lesson updated",
    LESSON_FETCHED: "Lesson fetched",
    LESSON_DELETED: "Lesson deleted",

    QUIZ_SAVED: "Quiz saved",
    QUIZ_UPDATED: "Quiz updated",
    QUIZ_FETCHED: "Quiz fetched",
    QUIZ_DELETED: "Quiz deleted",

    ASSIGNMENT_SAVED: "Assignment saved",
    ASSIGNMENT_UPDATED: "Assignment updated",
    ASSIGNMENT_FETCHED: "Assignment fetched",
    ASSIGNMENT_DELETED: "Assignment deleted",
}

module.exports = {
    success,
    error,
    response
}
