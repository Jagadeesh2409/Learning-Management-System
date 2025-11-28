const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
const PORT = process.env.PORT || 3000
const errorHandler = require('./utils/errorHandler')
const path = require('path')

const authRoute = require('./routes/authRoute')
const studentRoute = require('./routes/studentRoute')
const instructorRoute = require('./routes/instructorRoute')
const adminRoute = require('./routes/adminRoute')
const uploadRoute = require('./routes/uploadRoute')
const socialmediaRoute = require('./routes/socialmediaRoute')
const courseRoute = require('./routes/courseRoute')
const videoStreamRoute = require('./routes/videoStreamRoute')
const lessonRoute = require('./routes/lessonRoute')
const paymentRoute = require('./routes/paymentRoute')
const studentCourseRoute = require('./routes/student.courseRoute')
const quizRoute = require('./routes/quizRoute')
const liveClassRoute = require('./live-class/routes')
const assignmentRoute = require('./routes/assignmentRoute')


app.use(express.static(path.join(__dirname, 'public')));

require('./socket/index')(io)

app.use(express.json())


app.use('/course', courseRoute)
app.use('/auth', authRoute)
app.use('/student', studentRoute)
app.use('/instructor', instructorRoute)
app.use('/admin', adminRoute)
app.use('/upload', uploadRoute)
app.use('/socialmedia', socialmediaRoute)
app.use('/course', courseRoute)
app.use('/video', videoStreamRoute)
app.use('/lesson', lessonRoute)
app.use('/payment', paymentRoute)
app.use('/student', studentCourseRoute)
app.use('/live-class', liveClassRoute)
app.use('/quiz', quizRoute)
app.use('/assignment', assignmentRoute)


app.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




