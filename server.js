const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const dep = __dirname + "/dist/activteller/index.html";
const port = process.env.PORT || 8081;

app.use(express.static(__dirname + "/dist/activteller"));

app.get("/*", (req, res) => {
  // Accept: text/*, application/json
  req.accepts("html");
  // => "html"
  req.accepts("text/html");

  res.sendFile(path.join(dep));
});

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`App running on: http://localhost:${port}`)
);