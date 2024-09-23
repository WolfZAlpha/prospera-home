import { Server } from "socket.io";
import { authenticate } from "../../middleware/authMiddleware/index.js";

export const initializeChat = (server) => {
  const io = new Server(server, {
    cors: {
      origin: [
        process.env.FRONTEND_URL,
        process.env.DASHBOARD_URL,
        process.env.TEAM_DASHBOARD_URL,
      ],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      const user = await authenticate(token);
      socket.user = user;
      next();
    } catch (error) {
      next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.user.name);

    socket.on("sendMessage", (message) => {
      io.emit("message", {
        user: socket.user.name,
        message: message,
        timestamp: new Date(),
      });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.user.name);
    });
  });
};
