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
    date: {
        type: String,
        default: dateFormat(now, "mmmm dS, yy"),
    },
})

module.exports = mongoose.model('user', user);