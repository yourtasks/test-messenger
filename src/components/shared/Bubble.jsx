import React from "react";

const Bubble = ({ username, data }) => {
  const self = data && data.user === username;
  return (
    <div className={`${self && "self-end"} text-bold`}>
      {!self && <p>{data.user}</p>}
      <div
        className={`w-fit h-fit p-2 rounded-lg ${
          self ? "bg-blue-500" : "bg-rose-500"
        }`}
      >
        {data.message}
      </div>
    </div>
  );
};

export default Bubble;
