const app = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const cloudinary = require('cloudinary').v2;
const datauri = require('datauri');
const path = require('path');

const dUri = new datauri();
const dataUri = image => dUri.format(path.extname(image.name).toString(), image.data);

// Update biography endpoint
app.post('/biography', async (req, res) => {

    try {
        // Verify user JSON Web Token
        await jwt.verify(req.headers.authentication, process.env.SECRET_PW);

        // Decode JSON Web Token, extract username
        // Find user to update user location
        const username = jwt.decode(req.headers.authentication);
        const data = await User.updateOne(
            {username: username.username},
            {biography: req.body.biography}
        );

        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.send({error: true, message: err.message.toString()});
    }
})

// Upload avatar endpoint
app.post('/avatar', async (req, res) => {
    try {

        // Verify user JSON Web Token
        await jwt.verify(req.headers.authentication, process.env.SECRET_PW)

        // Verify image exists
        if (!req.files || !req.files.image) {
            throw new Error("No image uploaded");
        }

        // Verify image filesize does not exceed 400 KB
        if (req.files.image.size > 400000) {
            throw new Error("Exceeded maximum image filesize");
        }

        // Verify file is of a supported format
        if (req.files.image.mimetype !== 'image/png' && req.files.image.mimetype !== 'image/jpg') {
            throw new Error("Unsupported filetype");
        }
        
        const file = dataUri(req.files.image).content;
        const upload = await cloudinary.uploader.upload(file, options = {folder: 'avatars'});

        // Decode JSON Web Token, extract username
        // Find user to update avatar
        const username = jwt.decode(req.headers.authentication);
        await User.updateOne(
            {username: username.username},
            {avatar: upload.url}
        );

        res.send(upload);
    }
    catch (err) {
        console.log(err);
        res.send({error: true, message: err.message.toString()});
    }
});

module.exports = app;