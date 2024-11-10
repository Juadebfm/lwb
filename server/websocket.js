const setupWebSocket = (server) => {
  const io = require("socket.io")(server);

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("join-thread", (threadId) => {
      socket.join(`thread-${threadId}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
};

module.exports = setupWebSocket;
