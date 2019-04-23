const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.once('open', () => console.log("Connected to Mongoose"));

module.exports = mongoose.connection;