const success = (res, data, message, status) => {
    return res.status(status).json({
        success: true,
        message: message,
        data: data
    })
}

const error = (res, data, message, status) => {
    return res.status(status).json({
        success: false,
        message: message,
        data: data
    })
}

const response = {
    ISE: "Internal Server Error",
}

module.exports = {
    success,
    error,
    response
}
