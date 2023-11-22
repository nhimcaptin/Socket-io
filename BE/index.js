const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173" });

io.on("connection", (socket) => {
  console.log("socket", socket.id);

  socket.on("addNewUser", (userId) => {
    console.log("userId", userId);

    io.emit("listUser", [userId]);
  });

  socket.on("getMessage", () => {
    io.to("socket.id của người nhận").emit("Message", "");
  });

  socket.on("disconnect", () => {
    console.log("socket.id", socket.id);
  });
});

io.listen(8080);
