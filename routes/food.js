const express = require('express');

const Food = require('../models/foods');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getFoods, createFood} = require('../controllers/foods');

const router = express.Router();

router.get('/getfoods', getFoods);

router.post('/foods/post',createFood);


module.exports = router;