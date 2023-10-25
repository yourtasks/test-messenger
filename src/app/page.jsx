"use client";

import { useSocket } from "@/components/providers/SocketProvider";
import ActiveUsers from "@/components/shared/ActiveUsers";
import Bubble from "@/components/shared/Bubble";
import ChatBox from "@/components/shared/ChatBox";
import Login from "@/components/shared/Login";
import { useEffect, useState } from "react";

const Page = () => {
  const [chats, setChats] = useState([]);
  const [username, setUsername] = useState(null);
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) {
      console.log("socket not connected");
      return;
    }

    socket.on("send-message", ({ message, user }) => {
      console.log("socket working");
      console.log(message, user);
      setChats((prev) => [...prev, { user, message }]);
    });
  }, [socket]);

  if (!username) {
    return <Login username={username} setUsername={setUsername} />;
  }

  return (
    <div className="h-screen w-screen">
      <ActiveUsers />
      <h1>{username}</h1>
      <div className="flex flex-col gap-y-4 h-[300px] overflow-y-auto">
        {chats.length > 0 &&
          chats.map((data, index) => (
            <Bubble key={index} username={username} data={data} />
          ))}
      </div>
      <ChatBox username={username} />
    </div>
  );
};

export default Page;
