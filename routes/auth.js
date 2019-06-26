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
        const search = await User.findOne({username: req.body.username.toLowerCase()});
        if (search) {
            throw new Error("Username already exists");
        }

        // If user does not exist, hash password and save to database
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const user = new User({
            username: req.body.username.toLowerCase(),
            password: hash,
            avatar: process.env.DEFAULT_AVATAR,
        });

        const data = await user.save();
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.send({error: true, message: err.message.toString()});
    }
});

// User login endpoint
app.post('/login', async (req, res) => {
    try {
        // Check if username exists in database
        const search = await User.findOne({username: req.body.username.toLowerCase()})
        if (!search) {
            throw new Error("Username does not exist");
        }

        // Verify password against hashed password
        const match = await bcrypt.compare(req.body.password, search.password);
        if (!match) {
            throw new Error("Incorrect password");
        }

        // Sign and distribute JSON Web Token
        const token = await jwt.sign({username: req.body.username}, process.env.SECRET_PW);
        res.send({token: token});
    }
    catch (err) {
        console.log(err);
        res.send({error: true, message: err.message.toString()});
    }
})

// JWT verification endpoint
app.post('/verify', async (req, res) => {
    try {
        await jwt.verify(req.body.token, process.env.SECRET_PW)
        res.send({error: false});
    }
    catch (err) {
        console.log(err);
        res.send({error: true, message: err.message.toString()});
    }
})

module.exports = app;