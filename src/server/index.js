var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

// to use json
app.use(bodyParser.json());

// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  //res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/getApiKey", function (req, res) {
  res.json({
    api_key: process.env.API_KEY,
  });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
