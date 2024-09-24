const express = require("express");

const connectDB = require("./db.js");
const itemModel = require("./models/item.js");
const cors = require("cors");
const LoginModel = require("./models/Login.js");

const { escape } = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", async (req, res) => {
  const response = await itemModel.find();
  return res.json({ items: response });
});

//login
app.post("/Login", (req, res) => {
  LoginModel.create(req.body)
    .then((Login) => escape.json(Login))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("app is running");
});
