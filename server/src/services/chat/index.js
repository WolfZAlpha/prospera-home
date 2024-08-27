import { Server } from "socket.io";

export const initializeChat = (server) => {
  const io = new Server(server, {
    cors: {
      origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("sendMessage", (message) => {
      io.emit("message", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
