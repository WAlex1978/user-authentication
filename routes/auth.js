const app = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

// User Registration Endpoint
app.post('/register', async (req, res) => {
    try {
        // Check if username already exists in database
        // If user exists, throw error
        const search = await User.findOne({username: new RegExp(req.body.username, 'i')});
        if (search) {
            throw new Error("Username already exists");
        }

        // If user does not exist, hash password and save to database
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const user = new User({
            username: req.body.username,
            password: hash,
        });

        const data = await user.save();
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

module.exports = app;