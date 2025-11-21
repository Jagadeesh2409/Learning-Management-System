const express = require('express')
const socket = require('socket.io')
const app = express()
const http = require('http')
const server = http.createServer(app)


const io = new socket.Server(server,{
    cors:{
        origin:"*",
        methods:['post','get']
    }
})

app.io =io
require('./socket/index.js')(io)

app.get('/',(req,res)=>{
    res.send('<h1>Server is Running</h1>')
})

server.listen(3000,()=>{
    console.log('server is running')
})