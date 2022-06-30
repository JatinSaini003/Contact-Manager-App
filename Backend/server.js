const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// const User = require('./Model/userSchema');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(require('./Router/Routes'));

dotenv.config({ path: "./config.env" });
require("./DataBase/connection");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server Started");
});