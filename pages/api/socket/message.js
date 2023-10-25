export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).json("Method not allowed");
  }

  const message = req.body.message;
  const username = req.body.username;

  res?.socket?.server?.io.emit("send-message", { message, user: username });

  res.end();
}
