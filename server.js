const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./connection');

const authRouter = require('./routes/auth');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth/', authRouter);

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