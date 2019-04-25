const app = require('express').Router();
const User = require('../models/user');

// Get user endpoint
app.get('/', async (req, res) => {
    try {
        // Search for user by username
        const search = await User.findOne({username: new RegExp(req.query.username, 'i')}, {password: 0});

        // If null results from search
        if (!search) {
            throw new Error("User not found");
        }

        res.send(search);
    }
    catch (err) {
        console.log(err);
        res.send({error: true, message: err.message.toString()});
    }
});

module.exports = app;