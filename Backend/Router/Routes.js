const express = require('express');
const io = require('socket.io');
const router = express.Router();
const User = require('../Model/userSchema');

router.get("/", (req, res) => {
    res.send("Hello world from Server side  '(--)' BACKEND");
})

router.get("/about", (req, res) => {
    res.send("ABOUT PAGE");
})

router.get("/login", (req, res) => {
    res.send("LOGIN PAGE");
})

router.get("/addContact", async (req, res, next) => {
    User.find({}, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            res.json(user);
        }
    })
});

router.post("/update", async (req, res) => {
    const { id, name, email } = req.body;
    try {
        const updateUser = await User.updateOne({ id: id }, { id: id, name: name, email: email });
        return;
    }

    catch (err) {
        console.log(err);
    }
});

router.post("/remove", async (req, res) => {
    const { id } = req.body;
    try {
        const updateUser = await User.deleteOne({ id: id });
        return;
    }

    catch (err) {
        console.log(err);
    }
});

router.post('/addContact', async (req, res) => {
    const { id, name, email } = req.body;
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else {
            const user = new User({ id, name, email });
            await user.save();
            res.status(201).json({ message: "Contact added successfully" });
        }
    }

    catch (err) {
        console.log(err);
    }
});

module.exports = router;