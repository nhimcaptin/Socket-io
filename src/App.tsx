import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const _socket = io("http://localhost:8080");
    setSocket(_socket);
    _socket.emit("addNewUser", "1");
    _socket.on("listUser", (res) => {
      console.log("res", res);
    });
    return () => {
      _socket.off("listUser");
      _socket.disconnect();
    };
  }, []);
  return <>1131231</>;
}

export default App;
