import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const path = `/api/socket/io`;
    const httpServer = res.socket.server;
    const io = new Server(httpServer, {
      path,
      addTrailingSlash: false,
    });

    io.on("connection", () => {
      console.log("[SERVER]: User connected");
    });

    res.socket.server.io = io;
  }
  console.log("first");
  res.end();
};

export default ioHandler;
