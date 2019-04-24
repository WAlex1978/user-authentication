const mongoose = require('mongoose');

const user = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    posts: [],
    subscriptions: [],
    biography: {
        type: String,
    }
})

module.exports = mongoose.model('user', user);