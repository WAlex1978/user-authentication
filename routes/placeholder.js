const app = require('express').Router();
const User = require('../models/user');

app.get('/', (req, res) => {
    res.send("Hello World");

    user = new User({message: "Hello World"});
    user.save();
});

module.exports = app;