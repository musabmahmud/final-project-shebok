const express = require('express');

const Account = require('../models/accounts');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getAccounts, createAccount} = require('../controllers/accounts');

const router = express.Router();

router.post('/accounts/signin', getAccounts);

router.post('/accounts/signup',createAccount);

module.exports = router;