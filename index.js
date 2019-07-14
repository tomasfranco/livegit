const express = require("express");

const app = express();

app.get("/teste"),
  (req, res) => {
    return res.json({ teste: "world, alterando e testanto o git" });
  };

app.listen(3333);
