"use client";

import { useState } from "react";
import { useSocket } from "../providers/SocketProvider";
import axios from "axios";

const ChatBox = ({ username }) => {
  const [chat, setChat] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/socket/message`, {
        message: chat,
        username,
      });

      console.log("posting");
    } catch (error) {
      console.log(error);
    }
    console.log(chat);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        type="text"
        placeholder="write a message"
        className="bg-transparent"
      />
      <button className="px-2 py-2 bg-blue-500">send</button>
    </form>
  );
};

export default ChatBox;
