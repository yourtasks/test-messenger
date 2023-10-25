"use client";

import { useSocket } from "../providers/SocketProvider";

const ActiveUsers = () => {
  const { connectedClients } = useSocket();

  return (
    <div className="w-full text-center text-green-500">
      Total active users:
      {connectedClients.length}
    </div>
  );
};

export default ActiveUsers;
