module.exports = (io, socket) => {
    if (!io.roomsData) io.roomsData = {}; // Store rooms globally

    // Join room
    socket.on("join-room", ({ roomId, role, userId }) => {
        socket.join(roomId);
        socket.data = { roomId, role, userId };

        if (!io.roomsData[roomId]) io.roomsData[roomId] = [];

        // Add participant
        io.roomsData[roomId].push({ id: socket.id, role, userId });

        console.log("ROOM JOINED:", roomId, io.roomsData[roomId]);

        // 1) Send existing participants to newly joined user
        socket.emit("existing-participants",
            io.roomsData[roomId].filter(p => p.id !== socket.id)
        );

        // 2) Notify everyone else in the room
        socket.to(roomId).emit("participant-joined", {
            id: socket.id,
            role,
            userId,
        });
    });

    // Signaling relay
    socket.on("signal", (data) => {
        const { to } = data;
        if (to) {
            io.to(to).emit("signal", data);
        }
    });

    // Leave room
    socket.on("leave-room", () => {
        const roomId = socket.data.roomId;
        if (!roomId) return;

        socket.leave(roomId);

        // remove user from room list
        io.roomsData[roomId] = io.roomsData[roomId].filter(
            p => p.id !== socket.id
        );

        socket.to(roomId).emit("participant-left", socket.id);
    });

    // Disconnect
    socket.on("disconnect", () => {
        const roomId = socket.data.roomId;
        if (!roomId) return;

        // remove user
        io.roomsData[roomId] = io.roomsData[roomId].filter(
            p => p.id !== socket.id
        );

        socket.to(roomId).emit("participant-left", socket.id);
    });
};
