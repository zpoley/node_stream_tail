HOST = null; // localhost
PORT = 8002;

var stream = require("./stream");
var sys = require("sys");
var url = require("url");
var qs = require("querystring");

stream.listen(PORT, HOST);

stream.get("/", stream.staticHandler("index.html"));
stream.get("/favicon.ico", stream.staticHandler("favicon.ico"));
stream.get("/jquery-1.2.6.min.js", stream.staticHandler("jquery-1.2.6.min.js"));

stream.get("/recv", function (req, res) {
  res.simpleJSON(200, {});
});
