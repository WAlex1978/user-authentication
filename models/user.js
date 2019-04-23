const mongoose = require('mongoose');

const user = mongoose.Schema({
    message: {
        type: String,
    },
})

module.exports = mongoose.model('user', user);