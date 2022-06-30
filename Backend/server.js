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

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join("../Frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log("Server Started");
});