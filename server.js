const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('./connection');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const settingsRouter = require('./routes/settings');

const PORT = process.env.PORT || 8080;
const app = express();
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);
app.use('/api/settings/', settingsRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.use('*', express.static('build'));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(_dirname, 'build', 'index.html'))
});

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});