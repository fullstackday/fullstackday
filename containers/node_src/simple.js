const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User requesting `/`");
  res.send({
    "message": "Hello",
    "timestamp": (new Date()).getTime(),
    "nodeVersion": process.version
  }).status(200);
});

app.listen(5000, () => console.log("Server started"));