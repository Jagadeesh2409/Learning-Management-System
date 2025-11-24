module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected')
        socket.on('disconnected', () => {
            console.log('user is disconnected')
        })
    });
}

