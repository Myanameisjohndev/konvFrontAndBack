const express = require("express");

const app = express();

app.use((req, res) => {
  res.status(201).send({
    message: "Hello world!",
  });
});

module.exports = app;
