const mongoose = require('mongoose');
const dateFormat = require('dateformat');
const now = new Date();

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
    subscribers: [],
    biography: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: String,
        default: dateFormat(now, "mmmm dS, yy"),
    },
})

module.exports = mongoose.model('user', user);