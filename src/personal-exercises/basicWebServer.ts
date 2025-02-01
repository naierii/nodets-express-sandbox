import { createServer } from "http";

const server = createServer();
const PORT = 5000; // TODO - Take from process.env

server.on("request", (req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.end(
    JSON.stringify({
      status: 200,
      data: "someData",
    })
  );
});

server.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
