import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import vmRoutes from "./routes/vm.routes";
import serverRoutes from "./routes/server.routes";
import logRoutes from "./routes/logs.routes";
import { CustomRequest } from "./types"; 

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Attach Socket.IO to Request
app.use((req, res, next) => {
  (req as CustomRequest).io = io;
  next();
});

// API Routes
app.use("/api/vm", vmRoutes);
app.use("/api/servers", serverRoutes);
app.use("/api/logs", logRoutes);

// ✅ Handle Socket Connections
io.on("connection", (socket) => {
  console.log("Client connected with ID:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// ✅ Function to Emit Server Updates
export const sendServerUpdates = (data: any) => {
  console.log("Emitting updateServers event:", data); // ✅ Debug log
  io.emit("updateServers", data);
};

// ✅ Start Server
const PORT = process.env.HTTP_PORT || 3000;
console.log(`Starting server on PORT: ${PORT}`); // Debugging log
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
