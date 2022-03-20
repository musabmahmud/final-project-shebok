const express = require('express');

const Post = require('../models/posts');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getPosts, createPost} = require('../controllers/posts');

const router = express.Router();

router.get('/getposts', getPosts);

router.post('/posts/post',createPost);


module.exports = router;