const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = express();
const port = 4000; // Or your preferred port

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS middleware
app.use(cors());

// Logging middleware
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/upicb", (req, res) => {
  res.send("GOOD GOD: GET");
});

app.post("/upicb", (req, res) => {
  const data = req.body;
  console.log("DATA: ", data);
  res.json(data);
});

// ... your other routes and application logic

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
