const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", function (req, res) {
  res.json({
    text: "Hello World",
  });
});

app.listen(3000);
