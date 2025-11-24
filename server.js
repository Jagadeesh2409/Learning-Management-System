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

require('./socket/index')(io)

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/auth', authRoute)
app.use('/student', studentRoute)
app.use('/instructor', instructorRoute)
app.use('/admin', adminRoute)
app.use('/upload', uploadRoute)
app.use('/socialmedia', socialmediaRoute)

app.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




