const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new socketIo.Server(server)
const PORT = process.env.PORT || 3000
const errorHandler = require('./utils/errorHandler')

require('./socket/index')(io)

app.use(express.json())
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




