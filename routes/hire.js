const express = require('express');

const Hire = require('../models/hires');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getHires, createHire} = require('../controllers/hires');

const router = express.Router();

router.get('/gethires', getHires);

router.post('/hires/post',createHire);


module.exports = router;