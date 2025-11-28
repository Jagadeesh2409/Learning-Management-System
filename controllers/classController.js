// /src/controllers/classController.js (example)
exports.createClass = async (req, res) => {
    const { title, roomId } = req.body;
    // create class in DB...
    // notify enrolled students (if you have their socket rooms)
    const io = req.app.io;
    // Example: notify all users in "course_12" room
    io.to(`course_${courseId}`).emit('notification', { type: 'new-class', roomId, title });
    return res.json({ success: true });
};
