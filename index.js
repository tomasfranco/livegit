const express = require("express");

const app = express();

app.get("/teste"),
  (req, res) => {
    return res.json({ teste: "world " });
  };

app.listen(3333);
