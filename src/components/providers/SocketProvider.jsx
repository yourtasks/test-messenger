"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io as ClientIO } from "socket.io-client";

const SocketContext = createContext({
  connectedClients: [],
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

const SocketProvider = ({ children }) => {
  const [connectedClients, setConnectedClients] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const io = new ClientIO(process.env.NEXT_PUBLIC_SITE_URL, {
      path: `/api/socket/io`,
      addTrailingSlash: false,
    });

    io.on("connect", () => {
      setIsConnected(true);
      setConnectedClients((prev) => [...prev, io.id]);
    });
    io.on("disconnect", () => {
      setIsConnected(false);
      setConnectedClients((prev) => {
        return prev.filter((id) => id !== io.id);
      });
    });

    setSocket(io);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ connectedClients, isConnected, socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
