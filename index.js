const http = require("http");
const express = require("express");
// const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => { //Client se message aaya Server me
    io.emit("message", message);           // Server ne message bheja to All Client
    console.log(" As server->A New User Message :",message);
  });
});

// app.use(express.static(path.resolve("./public")));
app.use(express.static('public'));

app.get("/", (req, res) => {
  // return res.sendFile(path.join(__dirname, "public", "index.html"));
  res.sendFile("index.html", { root: __dirname });
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));
