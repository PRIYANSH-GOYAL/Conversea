const path = require("path");
const express = require("express");
const server = express();
const PORT = 4444;

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));

// server.get("/signup", )
server.post("/login", (req, res) => {});

server.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
