const express = require('express');

const Post = require('../models/users');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getUsers, createUser} = require('../controllers/users');

const router = express.Router();

router.get('/getusers', getUsers);

router.post('/users/post',createUser);


module.exports = router;