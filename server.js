var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static("public"));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on localhost:" + PORT);
});
