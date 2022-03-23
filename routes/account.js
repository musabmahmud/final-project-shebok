const express = require('express');

const Hire = require('../models/accounts');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getAccounts, createAccount} = require('../controllers/accounts');

const router = express.Router();

router.get('/getaccounts', getAccounts);

router.post('/accounts/post',createAccount);

module.exports = router;