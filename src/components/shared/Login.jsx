"use client";

import { useState } from "react";

const Login = ({ setUsername }) => {
  const [uname, setUname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername(uname);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-screen flex flex-col gap-y-4 items-center justify-center"
    >
      <input
        type="text"
        placeholder="username"
        className="p-2 rounded-lg bg-white bg-opacity-20"
        value={uname}
        onChange={(e) => setUname(e.target.value)}
      />
      <button className="bg-blue-500 px-4 py-2 rounded-lg">Login</button>
    </form>
  );
};

export default Login;
