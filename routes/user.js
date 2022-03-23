const express = require('express');

const Post = require('../models/users');

const multer = require("multer");

const {getUsers, createUser} = require('../controllers/users');

const router = express.Router();

const path = require("path");

router.get('/getusers', getUsers);

const storage = multer.diskStorage({
    destination: function(res, file, cb){
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(res, file, cb){
        cb( null, `${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage})

router.post('/users/post', upload.array('profilePicture'), createUser );

module.exports = router;