const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(" Rearc Quest Task app");
});

app.get("/me", (req, res) => {
  res.send("Hi, This is a sample app for rearc quest");
});

app.listen(5000, () => {
  console.log("listening");
});