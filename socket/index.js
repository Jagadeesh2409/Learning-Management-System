
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Socket connected:', socket.id);
        require('./liveSocket')(io, socket)
        socket.on('disconnect', (reason) => {
            console.log('Socket disconnected:', socket.id, reason);
        });
    });
};
