const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new socketIo.Server(server)
const PORT = process.env.PORT || 3000
const errorHandler = require('./utils/errorHandler')

const authRoute = require('./routes/authRoute')
const studentRoute = require('./routes/studentRoute')
const instructorRoute = require('./routes/instructorRoute')
const adminRoute = require('./routes/adminRoute')
const uploadRoute = require('./routes/uploadRoute')
const socialmediaRoute = require('./routes/socialmediaRoute')
const courseRoute = require('./routes/courseRoute')
const videoStreamRoute = require('./routes/videoStreamRoute')
const commonRoute = require('./routes/commonRoute')

require('./socket/index')(io)

const cors = require('cors')
app.use(cors())
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
app.use('/live-class', require('./live-class/routes'))
app.use('/', commonRoute)


app.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




